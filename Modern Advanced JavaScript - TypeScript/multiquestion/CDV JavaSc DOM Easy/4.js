// Add JavaScript code to the previous program: when the Calculator function is called:
// 1. The browser displays an alert message with the result. e.g. "The result is 7"
// 2. Via the new read-only field as shown below, the result will also be displayed on the page.

function Calculator(operator, number1, number2) {
    let result=0;
    switch (operator) {
        case "plus":
            result = number1 + number2;
        break;
        case "minus":
            result = number1 - number2;
        break;
        case "multiply":
            result = number1 * number2;
        break;
        case "division":
            if (number2 !== 0) {
                result = number1 / number2;
            }else{
                result="divided by 0 error!";
            }
        break;
    }
    return result;
}

function handleCalculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    if (!isNaN(number1) && !isNaN(number2)) {
        let result = Calculator(operator, number1, number2);
        document.getElementById("result").value = result;
        alert( `The result is ${result}`);
    }  
}