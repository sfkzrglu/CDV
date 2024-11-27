// Create a function that takes one argument. Using a loop, the function should print all numbers from the argument down to 0 in a single line.
// The program should run another loop that calls this function four times with an argument of 7.

// 76543210
// 76543210
// 76543210
// 76543210

function myFunction(val:number):void{
    let output = '';
    for (let i = val; i >= 0; i--) {
        output += i;
    }
    console.log(output);
}

for (let j = 0; j < 4; j++) {
    myFunction(7);
}