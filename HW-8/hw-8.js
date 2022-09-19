let num1, num2;
const actionBtn = document.querySelector('#action')

actionBtn.addEventListener('click', calculate);

function calculate(action) {
    switch (action) {
        case '+':
            return add;
        case '-':
            return sub;
        case '*':
            return mul;
        case '/':
            return div;
        default:
            alert('Something wrong');

    }
}

function add() {
     num1 = document.querySelector('#num1').value
     num1 = parseInt(num1)
     num2 = document.querySelector('#num2').value
    num2 = parseInt(num2)
    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
    return result
}

function sub() { 
    num1 = document.querySelector('#num1').value
    num1 = parseInt(num1)
    num2 = document.querySelector('#num2').value
   num2 = parseInt(num2)
   result = num1 - num2;
   document.getElementById('out').innerHTML = result;
   return result
}
function mul() { 
    num1 = document.querySelector('#num1').value
    num1 = parseInt(num1)
    num2 = document.querySelector('#num2').value
   num2 = parseInt(num2)
   result = num1 * num2;
   document.getElementById('out').innerHTML = result;
   return result
}
function div() { 
    num1 = document.querySelector('#num1').value
    num1 = parseInt(num1)
    num2 = document.querySelector('#num2').value
   num2 = parseInt(num2)
   result = num1 / num2;
   document.getElementById('out').innerHTML = result;
   return result
}