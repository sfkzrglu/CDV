// Add JavaScript code to the previous program so that the following rules are checked automatically when you click the 'calculate' button:
// 1. Both fields must contain positive numbers or 0. (fields cannot be empty, and can only contain digits/numbers)
// 2. If the 'divide' option has been selected, the second field cannot contain the number 0.
// 3. If the 'minus' option is selected, the second field cannot contain a number greater than the first field.
// Display an appropriate alert message if one or more of these rules are not met.

function Calculator(operator, number1, number2) {
    let result=0;
    switch (operator) {
        case "plus":
            result = number1 + number2;
        break;
        case "minus":
            if (number2>number1) {
                result="Number 2 cannot be bigger than Number 1";
            } else {
                result = number1 - number2;
            }    
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
        if (typeof result == "string") {
            alert(result);
        }else if ( number1<0 || number2<0) {
            alert('Numbers cannot be smaller than 0!');
        }else{
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
}