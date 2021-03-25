# Dallas Cowboys Calculator

<p align="center">
  <img src="https://media.giphy.com/media/8L3269aXaTI8r7YxjJ/giphy.gif"></img></p>
  
The Dallas Cowboys Calulator is just that .... a calculator! But unlike the traditional calculator when the results from an equation equals a number of a Dallas Cowboy player, a Modal with their picture and stats will pop up. 

## Link To Use Calculator

<a href="https://dallas-cowboy-calculator.netlify.app">Click Here</a>

## Modal

<img src="https://res.cloudinary.com/darnycya/image/upload/v1615357339/Dak_Prescott_4_c5tdat.png">

This is an example of the image that will render in the Modal. 

## API

The API I am using is <a href="https://dallas-api.herokuapp.com/"></a>. I created it using Express, MongoDB and deployed it onto Heroku. Here's a snippet:

```
{
_id: "604ac20fb4f40e9ebaff5b88",
name: "Dak Prescott",
image: "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Dak_Prescott_4_c5tdat.png",
position: "Quarterback",
jerseyNumber: 4,
__v: 0,
createdAt: "2021-03-12T01:21:19.372Z",
updatedAt: "2021-03-12T01:21:19.372Z"
}
```


## `calculate()`

Calculate() is where all of the magic happens. I created a variable named `test`. Test filters through the `players` in the API and grabs each of their numbers and compares it to the result of the equation. Then in an if statement, if the length of test = 1, then the result turns into a Modal. And in that Modal the testee's image will be displayed. 

```
function calculate = () => {
  let checkResult = ''
  let test = this.state.players.filter(i => i.jerseyNumber === 
      (eval(this.state.result)))
      
          if (this.state.result.includes('--')) {
             checkResult = this.state.result.replace('--', '+')}
    
          else if (test.length === 1) {
           checkResult = this.showModal() 
           let imageURL = test[0].image
             this.setState({
             image: imageURL})}
     
    } ```
