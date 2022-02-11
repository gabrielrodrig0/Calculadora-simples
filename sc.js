let num1 = "";
let num2 = "";
let resposta = "";
let operador = "";

function adicionaNum (number){
    if (operador===""){
        document.getElementById("display").innerHTML += number;
        num1 = document.getElementById("display").innerHTML;
    }
    else if (operador!==""){
        document.getElementById("display").innerHTML += number;
        num2 = document.getElementById("display").innerHTML;
    }
}

function operacao (sinal) { 

    if (sinal==="+"){
        operador="+";
        document.getElementById("display").innerHTML = "";
    }
    else if (sinal==="-"){
        operador="-";
        document.getElementById("display").innerHTML = "";
    }    
    else if (sinal==="x"){
        operador="x";
        document.getElementById("display").innerHTML = "";
    }
    else if (sinal==="%"){
        operador="%";
        document.getElementById("display").innerHTML = "";
    }
    else if (sinal==="^"){
        operador="^";
        document.getElementById("display").innerHTML = "";
    }
}

function result (){
    if (num1!==""){
        if (operador==="+"){
            resposta = Number(num1)+Number(num2);
            document.getElementById("display").innerHTML = resposta;
            num1 = resposta;
            num2 = "";
            operador="";
        }
        else if (operador==="-"){
            resposta = Number(num1)-Number(num2);
            document.getElementById("display").innerHTML = resposta;
            num1 = resposta;
            num2 = "";
            operador="";
        }
        else if (operador==="x"){
            resposta = Number(num1)*Number(num2);
            document.getElementById("display").innerHTML = resposta;
            num1 = resposta;
            num2 = "";
            operador="";
        }
        else if (operador==="%"){
            resposta = Number(num1)/Number(num2);
            document.getElementById("display").innerHTML = resposta;
            num1 = resposta;
            num2 = "";
            operador="";
        }
        else if (operador==="^"){
            resposta = Number(num1)**Number(num2);
            document.getElementById("display").innerHTML = resposta;
            num1 = resposta;
            num2 = "";
            operador="";
        }
    }
}


let showSolved = document.getElementById("display");

showSolved.addEventListener("click",(item)=>{
    if(showSolved.innerHTML.length>9){
        alert(showSolved.innerHTML);
    }
})

function apagar (){
    num1 = "";
    num2 = "";
    resposta="";
    operador = "";
    document.getElementById("display").innerHTML = "";
}