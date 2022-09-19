

// const num1 = document.querySelector('#num1');
// const num2 = document.querySelector('#num2');
// const secect = document.querySelector('#action');
// const act = document.querySelector('#res');
// let result;

let act;


function calculate() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch(act){
        case '+':
        result=num1+num2;
        break;
        case '-':
        result=num1-num2;
        break;
        case '*':
        result=num1*num2;
        break;
        case '/':
        result=num1/num2;
        break;
    } 
    document.getElementById("result").innerHTML = result;
 }











    