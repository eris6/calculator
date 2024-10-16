let numOne = null;
let numTwo = null;
let currentOperator = null;
let displayNew = false;

const button = document.querySelector("div");
const display = document.querySelector(".display")
const plus = document.querySelector("#plusbutton");
const minus = document.querySelector("#minusbutton");
const product = document.querySelector("#multiplybutton");
const slash = document.querySelector("#dividebutton");
const plusminusbutton = document.querySelector("#plusminusbutton");
const clear = document.querySelector("#clearbutton");

function add(numOne, numTwo){
    let result = numOne + numTwo;
    if (result - Math. floor(result) !== 0){
        result = result.toFixed(8);
    }
    return (result < 99999999) ? result : result.toExponential();
}


function subtract(numOne, numTwo){
    let result = numOne - numTwo;
    if (result - Math. floor(result) !== 0){
        result = result.toFixed(8);
    }
    return (result < 99999999) ? result : result.toExponential();
}

function multiply(numOne, numTwo){
    let result = numOne * numTwo;
    if (result - Math. floor(result) !== 0){
        result = result.toFixed(8);
    }
    return (result < 99999999) ? result : result.toExponential();
}

function divide(numOne, numTwo){
    let result = numOne / numTwo;
    if (result - Math. floor(result) !== 0){
        result = result.toFixed(8);
    }
    return (result < 99999999) ? result : result.toExponential();
}

function operate(numOne, operation, numTwo){
    switch(operation){
        case '+':
            return add(numOne, numTwo);
        case '-':
            return subtract(numOne, numTwo);
        case '*':
            return multiply(numOne, numTwo);
        case '/':
            return divide(numOne, numTwo);
    }  
}

button.addEventListener('click', (event)=>{
    plus.style.backgroundColor = "#aa98a9";
    minus.style.backgroundColor = "#aa98a9";
    product.style.backgroundColor = "#aa98a9";
    slash.style.backgroundColor = "#aa98a9";
    let target = event.target

        switch(target.id){
            case "acbutton":
                display.innerHTML = "";
                numOne = null;
                numTwo = null;
            
            case "zerobutton":
                if (!display.innerHTML.includes(".") && display.innerHTML.length == 0){
                    break;
                }
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "0";
                    }
                    else{
                        display.innerHTML = "0";
                        displayNew = false;
                    }
                    };            
                break;
            case "onebutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "1";
                    }
                    else{
                        display.innerHTML = "1";
                        displayNew = false;
                    }
                };
                break;
            case "twobutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                    display.innerHTML += "2";
                }
                else{
                    display.innerHTML = "2";
                    displayNew = false;
                }
            };
                break;
            case "threebutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "3";
                    }
                    else{
                        display.innerHTML = "3";
                        displayNew = false;
                    }
                };
                break;
            case "fourbutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "4";
                    }
                    else{
                        display.innerHTML = "4";
                        displayNew = false;
                    }
                };
                break;
            case "fivebutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "5";
                    }
                    else{
                        display.innerHTML = "5";
                        displayNew = false;
                    }
                };
                break;
            case "sixbutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "6";
                    }
                    else{
                        display.innerHTML = "6";
                        displayNew = false;
                    }
                };
                break;
            case "sevenbutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "7";
                    }
                    else{
                        display.innerHTML = "7";
                        displayNew = false;
                    }
                };
                break;
            case "eightbutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "8";
                    }
                    else{
                        display.innerHTML = "8";
                        displayNew = false;
                    }
                };
                break;
            case "ninebutton":
                if (display.innerHTML.length < 9){
                    if (!displayNew){
                        display.innerHTML += "9";
                    }
                    else{
                        display.innerHTML = "9";
                        displayNew = false;
                    }
                };
                break;
            
            case "dotbutton":
                if (!display.innerHTML.includes(".")){
                    if (display.innerHTML.length == 0){
                        display.innerHTML = "0."
                    }
                    else{
                        display.innerHTML += "."
                    }    
                }
                break;

            case "plusbutton":
                plus.style.backgroundColor = "#e7dfde";
                if (numOne === null) {
                    if (display.innerHTML !== "") {
                        numOne = parseFloat(display.innerHTML);
                        display.innerHTML = '';
                    }
                    currentOperator = '+';
                } else {
                    if (display.innerHTML !== "") {
                        if (currentOperator === null) {
                            currentOperator = '+';
                        }
                        numTwo = parseFloat(display.innerHTML);
                        numOne = operate(numOne, currentOperator, numTwo);
                        display.innerHTML = numOne;
                        displayNew = true;  
                        currentOperator = '+';
                    }   
                    
                }
                break;
            
            case "minusbutton":
                minus.style.backgroundColor = "#e7dfde";
                if (numOne === null) {
                    if (display.innerHTML !== "") {
                        numOne = parseFloat(display.innerHTML);
                        display.innerHTML = '';
                    }
                    currentOperator = '-';
                } else {                
                    if (display.innerHTML !== "") {
                        if (currentOperator === null) {
                            currentOperator = '-';
                        }
                        numTwo = parseFloat(display.innerHTML);
                        numOne = operate(numOne, currentOperator, numTwo);
                        display.innerHTML = numOne;
                        displayNew = true; 
                        currentOperator = '-';
                    }   
                }
                break; 
            case "multiplybutton":
                product.style.backgroundColor = "#e7dfde";
                if (numOne === null) {
                    if (display.innerHTML !== "") {
                        numOne = parseFloat(display.innerHTML);
                        display.innerHTML = '';
                    }
                    currentOperator = '*';
                } else {
                    if (display.innerHTML !== "") {
                        if (currentOperator === null) {
                            currentOperator = '*';
                        }
                        numTwo = parseFloat(display.innerHTML);
                        numOne = operate(numOne, currentOperator, numTwo);
                        display.innerHTML = numOne;
                        displayNew = true; 
                        currentOperator = '*';
                    }   
                }
                break; 
            case "dividebutton":
                slash.style.backgroundColor = "#e7dfde";
                if (numOne === null) {
                    if (display.innerHTML !== "") {
                        numOne = parseFloat(display.innerHTML);
                        display.innerHTML = '';
                    }
                    currentOperator = '/';
                } else {                    
                    if (display.innerHTML !== "") {
                        if (currentOperator === null) {
                            currentOperator = '/';
                        }
                        numTwo = parseFloat(display.innerHTML);
                        numOne = operate(numOne, currentOperator, numTwo);
                        display.innerHTML = numOne;
                        displayNew = true; 
                        currentOperator = '/';
                    }   
                }
                break;
            case "equalbutton":
                if (numOne != null && display.innerHTML != ""){
                    numTwo = parseFloat(display.innerHTML);
                    display.innerHTML = operate(numOne, currentOperator, numTwo);
                    numOne = null;
                    currentOperator = null;
                }
                break;  

            case "plusminusbutton":  
                if (display.innerHTML[0] != '-'){
                    display.innerHTML = "-" + display.innerHTML;
                }
                else{
                    display.innerHTML = display.innerHTML.slice(1);
                }
                break;
            
            case "clearbutton":
                display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
                break;
            }

            
})

