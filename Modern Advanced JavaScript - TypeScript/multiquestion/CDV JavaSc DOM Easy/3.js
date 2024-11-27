// Modify your previous program and:
// 1. Add additional HTML elements to display the form below.
// 2. Add a new JavaScript function called Calculator(operator, number1, number2) that will take 3 arguments:
// - operator - which is of type string and can be "plus", "minus", "multiply" and "division"
// - number1 - the first number entered
// - number2 - second given number
// 3. Add JavaScript code: when the user clicks the 'Calculate' button, the Calculator function with the appropriate arguments will be called. This function must perform the specified operation and display the result to the console.

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
        document.getElementById("result").innerText = Calculator(operator, number1, number2);
    }  
}