
import { Component } from 'react';
import './App.css';

class Calc extends Component{

state ={ 
  value1: 0, 
  value2: 0,
  result: 0,
}

 


   getValueFirstInput=(e)=>{
    // this.setState({value1:+e.target.value})
    if (e.target.validity.valid) {
      let num1 = +(e.target.value)
      this.setState({
        value1: num1,
          result: num1 + this.state.value2
        }); 
    }
    }
    getValueSecondInput=(e)=>{
      // this.setState({value2:+e.target.value})
      if (e.target.validity.valid) {
        let num2 = +(e.target.value)
        this.setState({
          value2: num2,
            result: this.state.value1 + num2
          }); 
      }
      }

 

  render(){
    return (
      <div onSubmit={this.getSum}>
        
         <div>
          <p>First number:</p>
          <input type="number" value={this.state.num1} onChange={this.getValueFirstInput} />
          </div>
        
          <div>
          <p>Second number:</p>
         <input type="number" value={this.state.num2} onChange={this.getValueSecondInput}/>
         </div>
         <p>Result: {this.state.result}</p>
      </div>
  );
  }
}

export default Calc;
