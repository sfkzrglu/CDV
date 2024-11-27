// Add JavaScript code to the previous program:
// 1. To make the calculation result in the result field look like the one in the image.
// 2. After clicking the 'calculate' button, the number 1 and number 2 fields will be automatically cleared.

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
    document.getElementById("number1").value='';
    const number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("number2").value='';
    const operator = document.getElementById("operator").value;

    if (!isNaN(number1) && !isNaN(number2)) {
        let result = Calculator(operator, number1, number2);
        let operatorSymbol='';
        switch (operator) {
            case "plus":
                operatorSymbol ='+';
            break;
            case "minus":
                operatorSymbol ='-';
            break;
            case "multiply":
                operatorSymbol ='*';
            break;
            case "division":
                operatorSymbol ='/';
            break;
        }
        document.getElementById("result").value = `${number1}${operatorSymbol}${number2}=${result}`;
        alert( `The result is ${result}`);
    }  
}