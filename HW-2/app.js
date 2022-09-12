
// 1. Спрашиваем первый операнд 
// 1.1 Спрашиваем пока он не введет число

// 2. Спрашиваем второй операнд 
// 2.1 Спрашиваем пока он не введет число

// 3 Спрашиваем действие +, -, /, *
// 3.1 спрашиваем пока не введет правильно

// 4 Считаем результат

// 5. Вывести результат 

// let num1 = prompt('Введите первое число');

// while  (num1 === null || num1 === '' || isNaN(num1) ){
//     num1 = prompt('Введите первое число еще раз');  
// }
// // if (isNaN(num1)) {
// //     num1 = prompt('Введите первое число еще раз'); 
// //   }



// let action = prompt('Введите действие которое вы хотели бы совершить: +, -, *, /,')
// while(  action === null || action === ''){
//     action = prompt('Введите действие');
// };
// let num2 = prompt('Введите второе число');
// while(num2 === null || num2 === '' || isNaN(num2)){
//     num2 = prompt('Введите второе число еще раз');
// };
// // if (isNaN(num2)) {
// //     num2 = prompt('Введите второе число еще раз'); 
// //   }
// let result;


// function sum (num1, num2){
//     result = +num1  + +num2
//     alert(` ${num1 } + ${num2} = ${result} `)
// }
// function sub (num1, num2){
//     result = +num1  - +num2
//     alert(` ${num1 } - ${num2} = ${result} `)
// }
// function mul (num1, num2){
//     result = +num1  * +num2
//     alert(` ${num1 } * ${num2} = ${result} `)
// }
// function div (num1, num2){
//     result = +num1  / +num2
//     alert(` ${num1 } / ${num2} = ${result} `)
// }

// switch (action) {
//     case "+":
//       sum (num1, num2);
                
//     break; 
//     case "-":
        
//      sub (num1, num2);
        
// break; 
// case "*":
    
//      mul (num1, num2);
    
// break; 
// case "/":
    
//    div (num1, num2);
    
// break; 
// default:
//     alert( "Нет таких значений" );           
// }


let num1 = getNum('Put num1')
let num2 = getNum('Put num2')
let action = getAction()
let result = calculate(num1, num2, action)
showResult(num1 , num2, action, result)






function  getNum(title){
  let number = prompt(title);

  while(isNumInvalid(number)) {
    let number = prompt(title)
  }
  return +number
}

function isNumInvalid(number){
   return number == null || number.trim() == ''|| isNaN(number)
}

function getAction (){
    let action = prompt('Action')
    while(isActionInvalid(action)){
        let action = prompt('Action?')
    }
    return action
}
function isActionInvalid(action){
  return action !== '+' && action !== '-' && action !== '*'  && action !== '/' 
}

function calculate(num1, num2, action){
    switch (action){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
           return num1 * num2;
        case '/':
            return num1 / num2;
         default:
            alert('Something wrong')       
    }
}
function showResult(num1, num2, action, result) {
    alert(`${num1}  ${action} ${num2}   = ${result}`);
}