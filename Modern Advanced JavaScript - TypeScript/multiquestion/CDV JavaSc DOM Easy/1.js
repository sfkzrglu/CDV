// Create a new index.html file and:
// 1. Create a new main.js file and link this file to your HTML file. (using tag script)
// 2. In the JavaScript file, write a Calculate(number) function that will take one argument (number) and display all numbers from the given number to zero in the console.
// 3. Add JavaScript code so that the Calculate() function with the number 50 will be executed only after the entire document has been loaded.

function Calculate(number){
    for (let i = number; i >= 0 ; i--) {
        console.log(i);
    }
}
Calculate(50);