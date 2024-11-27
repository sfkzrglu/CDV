// Write a program that has one function with one argument.
// Using a loop, the function prints all numbers from 0 to the given argument in a single line.

// The program calls a function with an argument of 7, creates a new line, and calls the function once again with an argument of 4.

// Sample output of this program:
// 01234567
// 01234
 

function f(mx){
    let str='';
    for (let i = 0; i <=mx; i++) {
        str+=i;
    }
    console.log(str);
}

f(7)
f(4)