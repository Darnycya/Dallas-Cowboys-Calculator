import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results';
import Keypad from './Components/Keypad';
import Modal from './Components/Modal';


class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      show: false,
    }
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
      console.log(this.state.result)
      if (this.state.result.includes('--')) {
        checkResult = this.state.result.replace('--', '+')
      }
      else if (eval(this.state.result) === 4
      ) {
          checkResult = this.showModal();
        }

        

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                
              
              result: (eval(checkResult))
              
              
              

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
         
                <div className="calculator-body">
                    
                    <Results result={this.state.result}/>
                    <Keypad onClick={this.onClick}/>
          </div>
          
          <button
            
            class="toggle-button"
            id="centered-toggle-button"
            onClick={e => {
              this.showModal();
         }}
          >  <p className="X">X</p> </button>

              
          <Modal
            onClose={this.showModal}
            show={this.state.show}>
            

          <div className="image">
              <img src="https://res.cloudinary.com/darnycya/image/upload/v1612424104/Dak_ynbhmz.png"></img></div>
            
            
          </Modal>
          </>
        );
    }
}

export default App;