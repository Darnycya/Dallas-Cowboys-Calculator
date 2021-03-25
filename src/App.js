import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results';
import Keypad from './Components/Keypad';
import Modal from './Components/Modal';
import axios from 'axios'


class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      show: false,
      players: [],
      image: ''
    }
  }

  
  
  componentDidMount() {
    axios.get(`https://dallas-cowboys-roster.herokuapp.com/players`)
      .then(res => {
        const players = res.data;
        this.setState({ players })
      
    })
  }
  
    showModal = e => {
      this.setState({
        show: !this.state.show
      });
    };
  
    onClick = button => {
        if(button === "="){
          this.calculate()
        }
        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else {
            this.setState({
              result: this.state.result + button
            })
        }
    };
  
  calculate = () => {
      
    let checkResult = ''
    
    let test = this.state.players.filter(i => i.jerseyNumber ===
      // eslint-disable-next-line
      (eval(this.state.result)))

    
    
      if (this.state.result.includes('--')) {
        checkResult = this.state.result.replace('--', '+')
        
      }
    
      else if (test.length === 1) {
        checkResult = this.showModal() 
        let imageURL = test[0].image
       
        this.setState({
          image: imageURL
        })
        
      
      }
     
        else {
            checkResult = this.state.result
        }

        try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(checkResult)),
              
            })
         
       
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
        
  };
 

  
  render() {
  
      return (
        <>
          <div className="container">

            <div className="modal-body">
       <Modal
            onClose={this.showModal}
            show={this.state.show}>
            

          <div className="image">
              <img alt="modal" className="player-image" src={this.state.image}></img></div>
            
            
              </Modal>
              </div>

                <div className="calculator-body">
                    <Results result={this.state.result}/>
                    <Keypad onClick={this.onClick}/>
            </div>

            </div>
          
          </>
        );
    }
}

export default App;