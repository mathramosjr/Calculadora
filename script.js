let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""
let calculated = false;
let decimal = false;

//função para adicionar 1 numero a conta
function appendNumber(value){
    if (currentInput.length >= 15) return;
    if(calculated === true){
        currentInput = "";
        calculated = false;
    }
    currentInput += value
    display.textContent = currentInput
}

//função para adicionar um operador na conta
function appendOperator(operator){
    calculated = false;
    if (currentInput.length >= 15) return;
    if(currentInput === "" && operator !== ".") return
    if (operator === "." && currentInput.split(/[+\-*/]/).pop().includes(".")) return;
    if(/[+\-*/.]$/.test(currentInput)) return;
    currentInput += operator;
    display.textContent = currentInput;
}

//função que calcula a conta
function calculate(){
    try{
        let result = eval(currentInput)
        currentInput = result;
        display.textContent = currentInput;
        calculated = true;
    } catch(error){
        display.textContent = "Error";
        currentInput = "";
    }
}

//função para apagar a conta
function clearDisplay(){
    currentInput = "";
    display.textContent = 0;
}

//função para inverter a conta
function invert(){
    calculate();
    currentInput = currentInput*-1;
    display.textContent = currentInput;
}

