

let calc = document.getElementById("calculate");

calc.addEventListener("click", calc)

function calc(){
let act = document.getElementById("action");
act.addEventListener("change" , showAction())
    function add(){
       let n1,n2,res;
        n1=document.getElementById("num1").value;
        n2=document.getElementById("num2").value;
        res=parseInt(n1)+parseInt(n2);
        document.getElementById('out').innerHTML = result;
    }

    function sub(){
        let n1,n2,res;
        n1=document.getElementById("num1").value;
        n2=document.getElementById("num2").value;
        res=parseInt(n1)-parseInt(n2);
        document.getElementById('out').innerHTML = result;
    }

    function divide(){
        let n1,n2,res;
        n1=document.getElementById("num1").value;
        n2=document.getElementById("num2").value;
        res=parseInt(n1) / parseInt(n2);
        document.getElementById('out').innerHTML = result;
    }

    function mul(){
        let n1,n2,res;
        n1=document.getElementById("num1").value;
        n2=document.getElementById("num2").value;
        res=parseInt(n1)*parseInt(n2);
        document.getElementById('out').innerHTML = result;
    }
    

    function showAction(){
     switch(act.value){
        case "add" :
            add()
            break;

        case "sub" :
            sub()
            break;
                
        case "divide" :
            divide()
            break;
                
        case "mul":
            mul()
            break;
    }
}
}












    