let action = getAction()
let number = getNumbers('Put numbers of value')
let value = showNum()
let calculate = getActionCalculation()
let condition = getCondition()
showResult()



function getAction(){ 
    let action = prompt('Put action')
    
    while (getActionInvalid(action)) { 
        action = prompt('Put action again');
    }
    return action
}
 
function getActionInvalid(action) { 
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}

function getNumbers(title) { 
    let number = prompt(title);
    while (getNumbersInvalid(number)) { 
        number = prompt('Put number of values again')
    }
    return +number
}

function getNumbersInvalid (number) { 
    return number === null || number.trim() === '' || isNaN(number);
}

function showNum(title) {
   let array = []
    for (let i = 0; i < number; i++) {
        let operand = prompt('Put operand')
    
        while (getOperandInvalid(operand)) {
            operand = prompt('Put operand again')
        }
    
        array.push(Number(operand))
    }
        return array;
}
function getOperandInvalid (operand) { 
    return operand === null || operand.trim() === '' || isNaN(operand) || operand <=0;
}

function getActionCalculation() { 
    let calc; 
    switch (action) { 
        case '+':
            calc = value.reduce((total, amount) => total + amount)
            break;
         case '-':
            calc = value.reduce((total, amount) => total - amount)
            break;
            case '*':
                calc = value.reduce((total, amount) => total * amount)
            break;
            case '/':
                calc = value.reduce((total, amount) => total / amount)
               break;
    }
    return calc;
}

function getCondition() { 
    let condition;
    switch (action) { 
        case '+':
            condition = value.join('+');
            break;
         case '-':
            condition = value.join('-');
            break;
            case '*':
                condition = value.join('*');
            break;
            case '/':
                condition = value.join('/');
               break;
    }
    return condition;
}

function showResult() { 
    let result = `${condition} = ${calculate}`;
    alert(result);
}