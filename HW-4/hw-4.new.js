
// вариант дз
// let value = getValue();
// // let action = getAction();
// let result = calculationValue();

// // спрашиваю сколько значений надо ввести
// function getValue() {
//     let number = prompt('Choose how many values you want to enter')
    
//     while (isValueValidation(number)) {
//         value = prompt('Enter the correct value')
//     }
//     console.log('number of values:', number)
//         return +number
// }
// function isValueValidation(number) {
//     return number == null || number.trim() == '' || isNaN(number);
// }

// // ввожу сами значения

// function getOperand() {
//      operand = prompt('Enter values for the operation')
//     while (isNumberValidation(operand)) {
//         operand = prompt('Enter correct values for the operation')
//     }
//     return +operand
// }
// function isNumberValidation(operand) {
//     return operand == null || operand.trim() == '' || isNaN(operand) || operand < 0;
// }
// // спрашиваю операцию
// function getAction() {
//     action = prompt('Choose any operation: +,-,*,/')
//     while (isActionValidation(action)) {
//         action =  prompt('Put  action again: +, -, *, /,=')
//     }
//         return action
// }
// function isActionValidation(action) {
//     return action !== '+' && action !== '-' && action !== '*' && action !== '/'3;
// }

// // результат
// function calculationValue() {
//     let acc;
//     let str = '';
//     for (let i = 0; i < value; i++) {
//         let operand = getOperand('Enter values for the operation');
//         console.log('operands value: ', operand);
//         let action = getAction('Choose any operation: +,-,*,/,=');
//         console.log('action: ', action)
//         if (i === 0) {
//             acc = operand;
//             str += `${operand}`
//         } else {
//             switch (action) {
//                 case '+':
//                     acc = acc + operand;
//                     str += `+ ${operand}`;
//                     break;
//                 case '-':
//                     acc = acc - operand;
//                     str += `- ${operand}`
//                     break;
//                 case '*':
//                      acc = acc * operand;
//                      str += `* ${operand}`
//                     break;
//                 case '/':
//                     acc = acc / operand;
//                     str += `/ ${operand}`
//                     break;
//              case '=':
//                   break;
//             }
           
//         }
//     }
//     let result = `${str} = ${acc}`
//     alert(result)
// }
let num1, num2, result;
function plus() { 
    
    num1 =  document.getElementById('n1').value 
    num1 = parseInt(num1)
    num2 =  document.getElementById('n2').value
    num2 = parseInt(num2)
    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
    return result
}

function minus() { 
    num1 =  document.getElementById('n1').value 
    num1 = parseInt(num1)
    num2 =  document.getElementById('n2').value
    num2 = parseInt(num2)
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
    return result
}

function mul(){ 
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num1)
    result = num1 * num2;
    document.getElementById('out').innerHTML=result
    
}

function div(){ 
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num1)
    result = num1 / num2;
    document.getElementById('out').innerHTML=result
    
}

