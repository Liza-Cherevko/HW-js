// новый вариант 

const action = getAction();
const operandsCount = getOperandsCount(); // <2
const resultExpression = getExpression(operandsCount, action);
showResult(resultExpression);

function getAction() {
    let action = prompt('Action?');

    while (isActionInvalid(action)) {
        action = prompt('Action?');
    }

    return action;
}

function isActionInvalid(action) {
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}

function getOperandsCount() {
    return getNumber('How many operands?', isOperandsCountInvalid);
}

function isOperandsCountInvalid(num) {
    return isNumberInvalid(num) || num < 2;
}

function getOperand(title) {
    return getNumber(title, isOperandInvalid);
}

function isOperandInvalid(operand) {
    return isNumberInvalid(operand);
}

function getNumber(title, validationFn) {
    let operand = prompt(title);

    while (validationFn(operand)) {
        operand = prompt(title);
    }

    return +operand;
}



function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);


function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}

function getExpression(count, operation) {
    let result = getOperand('Operand 1');
    let expression = result;

    for (let i = 2; i <= count; i++) {
        const operand = getOperand('Operand ' + i);

        result = calculate(result, operand, operation);
        expression += ` ${operation} ${operand}`;
    }

    // 2 + 3 + = 5
    return `${expression} = ${result}`;
}

function calculate(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            alert('Something wrong');
    }
}

function showResult(expression) {
    console.log(expression);
}




// старый вариант 
// let operand;
// let action = getAction();
// let num = getNumValue();
// let result = operandCalculation();


// function getAction() { 
//     let action = prompt('Put some action: +, -, *, /')
//     console.log(action)
    
//     while (isActionInvalid(action)) { 
//         action =  prompt('Put  action again: +, -, *, /')
//     }
//     return action
// }
// function isActionInvalid(action) { 
//     return action !== '+' && action !== '-' && action !== '*' && action !== '/';
// }


// function getNumValue() { 
//     let number = prompt('Put some numbers of value')
//     while (isNumberValidation(number)) { 
//         number = prompt('Put numbers of value again')
//     }
//     console.log(number)
//     return +number
    
// }
 
// function isNumberValidation(number){ 
//     return number == null || number.trim() == '' || isNaN(number)
// }


// function showOperand (){ 
//     operand = prompt('Put some operand')

//     while (isOperandInvalid(operand)) { 
//         operand = prompt('Put some operand again')
//     }
//     return +operand;
// }
// function isOperandInvalid(operand) { 
//     return operand == null || operand.trim() == '' || isNaN(operand) || operand < 0;
// }
// function operandCalculation() {
//     console.log('numberOfvalue:', num)
//     let acc;
//     let str =''
//     for (let i = 0; i < num; i++) {
        
//         let operand = showOperand('Put operand ');

//         console.log('current operand:', operand)
//         if (i === 0) {
//             acc = operand
//             str += `${operand} `  
//         }
//         else {
//             switch (action) {
      
//                 case '+':
//                     acc = acc + operand;
//                     str += `+ ${operand}`;
//                     break;
//                 case '-':
//                     acc = acc - operand;
//                     str += `- ${operand}`;
//                     break;
//                 case '*':
//                     acc = acc * operand;
//                     str += `* ${operand}`;
//                     break;
//                 case '/':
//                     acc = acc / operand;
//                     str += `/ ${operand}`;
//                     break;
//                 default:
//                     alert('Something wrong')
//             }
        
            
//         }
//     }

//     let result = ` ${str} = ${acc}`;
//     alert(result)
// }


}

function getExpression(count, operation) {
    let result = getOperand('Operand 1');
    let expression = result;

    for (let i = 2; i <= count; i++) {
        const operand = getOperand('Operand ' + i);

        result = calculate(result, operand, operation);
        expression += ` ${operation} ${operand}`;
    }

    // 2 + 3 + = 5
    return `${expression} = ${result}`;
}

function calculate(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            alert('Something wrong');
    }
}

function showResult(expression) {
    console.log(expression);
}











// мой вариант
// let operand;
// let action = getAction();
// let num = getNumValue();
// let result = operandCalculation();


// function getAction() { 
//     let action = prompt('Put some action: +, -, *, /')
//     console.log(action)
    
//     while (isActionInvalid(action)) { 
//         action =  prompt('Put  action again: +, -, *, /')
//     }
//     return action
// }
// function isActionInvalid(action) { 
//     return action !== '+' && action !== '-' && action !== '*' && action !== '/';
// }


// function getNumValue() { 
//     let number = prompt('Put some numbers of value')
//     while (isNumberValidation(number)) { 
//         number = prompt('Put numbers of value again')
//     }
//     console.log(number)
//     return +number
    
// }
 
// function isNumberValidation(number){ 
//     return number == null || number.trim() == '' || isNaN(number)
// }


// function showOperand (){ 
//     operand = prompt('Put some operand')

//     while (isOperandInvalid(operand)) { 
//         operand = prompt('Put some operand again')
//     }
//     return +operand;
// }
// function isOperandInvalid(operand) { 
//     return operand == null || operand.trim() == '' || isNaN(operand) || operand < 0;
// }
// function operandCalculation() {
//     console.log('numberOfvalue:', num)
//     let acc;
//     let str = ''
//     for (let i = 0; i < num; i++) {
        
//         let operand = showOperand('Put operand ');

//         console.log('current operand:', operand)
//         if (i === 0) {
//             acc = operand
//             str += `${operand} `
//         }
//         else {
//             {
//                 switch (action) {
      
//                     case '+':
//                         acc = acc + operand;
//                         str += `+ ${operand}`;
//                         break;
//                     case '-':
//                         acc = acc - operand;
//                         str += `- ${operand}`;
//                         break;
//                     case '*':
//                         acc = acc * operand;
//                         str += `* ${operand}`;
//                         break;
//                     case '/':
//                         acc = acc / operand;
//                         str += `/ ${operand}`;
//                         break;
//                     default:
//                         alert('Something wrong')
//                 }
        
            
//             }
//         }

//         let result = ` ${str} = ${acc}`;
//         alert(result)
//     }

// }

