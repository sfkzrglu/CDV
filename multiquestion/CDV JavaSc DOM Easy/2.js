// Modify your previous program and:
// 1. Add HTML code to display the form below.
// 2. Add JavaScript code: when the user clicks the 'Calculate' button, the Calculate function will be invoked with the number provided by the user.
// (Hint: you need to use the code below and the onclick="..." event)
//Number: inputbox CalculateBox

function Calculate(){
    let number = parseInt(document.getElementById("input_id").value); 
    for (let i = number; i >= 0 ; i--) {
        console.log(i);
    }
}
