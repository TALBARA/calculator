const buttons = document.querySelectorAll("p[data-value]");
const currentValue = document.getElementById("result-value");
const previousValue = document.getElementById("result-operation");
let buttonsSelected = [];

buttons.forEach(element => {
    element.addEventListener("click", () => {
        const button = element.getAttribute("data-value");

        if (button != "+" && button != "-" && button != "*" && button != "=" && button != ",") {
        
            buttonsSelected.push(button);

            currentValue.textContent = buttonsSelected.join("");

            if (button == "C") {
                resetC();
            }else if (button == "CE"){
                resetCE();
            }

        }else{

            let parseButtonsSelected = buttonsSelected.join("");
            console.log(parseButtonsSelected);
            
            if (!calculator.trigger) {
                console.log("Trigger false");
                calculator.operator = button;
                calculator.previousValue = parseButtonsSelected;
                calculator.currentValue = parseButtonsSelected;
                buttonsSelected.length = 0;
                calculator.trigger = true;
                print(calculator);
            }else{

                if (calculator.operator != button) {
                    console.log("Boton cambiado" + button);
                    calculator.operator = button;
                    previousValue.textContent = `${calculator.previousValue}${calculator.operator}`;
                }else{
                    console.log("Trigger true");
                    console.log(buttonsSelected);
                    calculator.currentValue = parseButtonsSelected;
                    operation(calculator);
                    buttonsSelected.length = 0;
                }
            }
        }
    })
})

const calculator = {
    currentValue: 0,
    previousValue: 0,
    operator: "",
    trigger: false,
}

function print(calculator){
    currentValue.textContent = calculator.currentValue;
    
    let concatCurrentValueAndOperator = `${calculator.currentValue}${calculator.operator}`;
    console.log(concatCurrentValueAndOperator);

    let getPreviousValue = previousValue.textContent.length == 0 ?  concatCurrentValueAndOperator : calculator.previousValue;
    previousValue.textContent = getPreviousValue;
}

function operation(calculator){

    console.log(calculator);

    switch(calculator.operator){
        case "+":
        let sum = parseInt(calculator.currentValue) + parseInt(calculator.previousValue);
        console.log("Suma " + sum);
        
        currentValue.textContent = sum;
        previousValue.textContent = `${sum}${calculator.operator}`;
        calculator.previousValue = sum;
        break;

        case "-":
        console.log(calculator);
        let res = parseInt(calculator.previousValue) - parseInt(calculator.currentValue);
        console.log("Resta " + res);

        currentValue.textContent = res;
        if (res == 0) {
            previousValue.textContent = "";
        }else{
            previousValue.textContent = `${res}${calculator.operator}`;
        }
        calculator.previousValue = res;
        break;

        case "*":
        console.log(calculator);
        let mul =  parseInt(calculator.currentValue) * parseInt(calculator.previousValue);
        console.log("Multi " + mul);

        currentValue.textContent = mul;
        if (mul == 0) {
            previousValue.textContent = "";
        }else{
            previousValue.textContent = `${mul}${calculator.operator}`;
        }
        calculator.previousValue = mul;

        break;

        case "=":

        break;
    }
}

function resetC(){
    currentValue.textContent = 0;
    previousValue.textContent = "";
    buttonsSelected.length = 0;
}

function resetCE(){
    currentValue.textContent = 0;
    buttonsSelected.length = 0;
}