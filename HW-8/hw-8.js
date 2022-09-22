


let calc = document.getElementById('calculate');

calc.addEventListener('click', getCalc)

function getCalc() { 
    let act = document.getElementById('action').value,
        res;
        n1 = Number(document.getElementById('num1').value)
        n2 = Number(document.getElementById('num2').value)
    function add() { 
        return n1 + n2;
    }
    function sub() {      
        return n1 - n2;
    }
    function div() {        
        return n1 / n2;
    }
    function mul() {       
        return n1 * n2;        
    }

    switch (act) { 
        case 'add':
            res = add()
            break;
        case 'sub':
            res = sub()
            break;
        case 'div':
            res = div()
            break;
        case 'mul':
            res = mul()
            break;
    }

    document.getElementById('result').value = res;
}







// let calc = document.getElementById('calculate');

// calc.addEventListener('click', getCalc)

// function getCalc() { 
//     let act = document.getElementById('action');
//     act.addEventListener('change', getAction())
//     function add() { 
//         let n1, n2, res;
//         n1 = document.getElementById('num1').value;
//         n2 = document.getElementById('num1').value;
//         res = parseInt(n1) + parseInt(n2);
//         document.getElementById('result').value = res;
//     }
//     function sub() { 
//         let n1, n2, res;
//         n1 = document.getElementById('num1').value;
//         n2 = document.getElementById('num1').value;
//         res = parseInt(n1) - parseInt(n2);
//         document.getElementById('result').value = res;
//     }
//     function div() { 
//         let n1, n2, res;
//         n1 = document.getElementById('num1').value;
//         n2 = document.getElementById('num1').value;
//         res = parseInt(n1) / parseInt(n2);
//         document.getElementById('result').value = res;
//     }
//     function mul() { 
//         let n1, n2, res;
//         n1 = document.getElementById('num1').value;
//         n2 = document.getElementById('num1').value;
//         res = parseInt(n1) * parseInt(n2);
//         document.getElementById('result').value = res;
//     }
//     function getAction() { 
//         switch (act.value) { 
//             case 'add':
//                 add()
//                 break;
//          case 'sub':
//             sub()
//                 break;
//             case 'div':
//                 div()
//                 break;
//             case 'mul':
//                 mul()
//                 break;
//         }
//     }
// }
