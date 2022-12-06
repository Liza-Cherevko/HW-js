
import './App.css';

import react, { Component } from 'react';
import Greeting from '../Greeting/Greeting';

class App extends Component {
 state ={
  counts:0,
  name:'Liza',
  showGreeting: true
 }
  onClick =()=>{
    this.setState({
      counts: this.state.counts +1
    })
    this.state.counts++
    console.log('clicked', this.state.counts)
  }

onInputChange=(e)=>{
this.setState({
  name:e.target.value
})
}
onToggle=()=>{
  console.log('toggle')
  this.setState({
    showGreeting: !this.state.showGreeting,
  })
}
   render(){
    return (
      <div>
       {this.state.showGreeting ? 'Hello '+ this.state.name: null}
       <br/>
        {this.state.counts}
        <br/>
        <button onClick={this.onClick}>Click me</button>
        <br/>
        <input value={this.state.name} onChange={this.onInputChange}/>
        <button onClick={this.onToggle}>Toggle Creeting</button>
      </div>
    )
   }
}

export default App;
