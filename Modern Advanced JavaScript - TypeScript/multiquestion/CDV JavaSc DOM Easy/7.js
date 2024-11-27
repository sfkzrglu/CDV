// To the previous program:
// 1. Add HTML code to display the 'Edit' checkbox.
// 2. Add JavaScript code to make the result field 'read-only' only when the 'Edit' checkbox is unchecked.

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

function changeAnswerBoxReadonlyOption(){
    if (document.getElementById("edit").checked) {
        document.getElementById("result").removeAttribute('readonly');
        
    } else {
        document.getElementById("result").setAttribute('readonly', true);
    }
}