
import { Component } from 'react';
import './App.css';







// cacl

class Calc extends Component{

  state ={ 
    operandA: 0, 
    operandB: 0,
    operation:'+',
    result: 0,
  }
  
   
      
    
        onFormSubmit=(e)=>{
          e.preventDefault();
     this.calculate(+e.target.elements.operandA.value, +e.target.elements.operandB.value, e.target.elements.operation.value)
      }


      calculate(a,b,operator){
           let result = 0;
                  switch(operator){
                case '+': result = a+b; break;
                case '-': result = a-b; break;
                case '/': result = a/b; break;
                case '*': result = a*b; break;
      }
      this.setState({
        result,
      })
    }
    
    render(){
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>         
            <input name="operandA" type="number"  />
              <select name="operation" >
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="/">/</option>
                  <option value="*">*</option>
              </select>
           <input  name="operandB" type="number" />
           <button >calculate</button>
           <p>Result: {this.state.result}</p>
           </form>
           </div>
    );
    }
  }

// мое решение
// class Calc extends Component{

// state ={ 
//   value1: 0, 
//   value2: 0,
//   operation:'+',
//   result: 0,
// }

 


//    getValueFirstInput=(e)=>{
//     // this.setState({value1:+e.target.value})
//     if (e.target.validity.valid) {
//       let num1 = +(e.target.value)
//       this.setState({
//         value1: num1,
//           result: num1 + this.state.value2
//         }); 
//     }
//     }
//     getValueSecondInput=(e)=>{
//       // this.setState({value2:+e.target.value})
//       if (e.target.validity.valid) {
//         let num2 = +(e.target.value)
//         this.setState({
//           value2: num2,
//             result: this.state.value1 + num2
//           }); 
//       }
//       }

 

//   render(){
//     return (
//       <div >
        
//          <div>
//           <p>First number:</p>
//           <input type="number" value={this.state.num1} onChange={this.getValueFirstInput} />
//           </div>
        
//           <div>
//           <p>Second number:</p>
//          <input type="number" value={this.state.num2} onChange={this.getValueSecondInput}/>
//          </div>
//          <p>Result: {this.state.result}</p>
//       </div>
//   );
//   }
// }

export default Calc;
