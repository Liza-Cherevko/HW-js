import { Component} from 'react';
import './App.css';
import Greeting from '../Greetings/Greeting';




class App extends Component {
  onClick() { 
    console.log('click')
    }



  render() { 
    return (
      <div >
        <Greeting/>
       <button onClick={this.onClick}>Click me</button>
    </div>
    )
  }
}
export default App
