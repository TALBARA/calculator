const buttons = document.querySelectorAll("p[data-value]");
const currentValue = document.getElementById("result-value");
const previousValue = document.getElementById("result-operation");
let buttonsSelected = [];

buttons.forEach(element => {
    element.addEventListener("click", () => {
        const button = element.getAttribute("data-value");

        if (button != "+" && button != "-" && button != "x" && button != "=" && button != ",") {
        
            buttonsSelected.push(button);

            currentValue.textContent = buttonsSelected.join("");

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
                console.log(buttonsSelected);
                calculator.currentValue = parseButtonsSelected;
                operation(calculator);
                buttonsSelected.length = 0;
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
        let res = parseInt(calculator.currentValue) - parseInt(calculator.previousValue);

        case "*":
        let mul =  calculator.currentValue * calculator.previousValue;
    }
}

