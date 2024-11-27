// Create three functions, each taking one argument.
// The first function should use a loop to print all numbers from the argument down to 0 in a single line.
// The second function should do the same, but it should start from 0 and go up to the argument.
// The third function should first call the first function and then the second function.

// The program should only call the third function with an argument of 5.

// 543210012345
 

function countdown(val: number): string {
    let str = '';
    for (let i = val; i >= 0; i--) {
        str += i;
    }
    return str;
}

function countup(val: number): string {
    let str = '';
    for (let i = 0; i <= val; i++) {
        str += i;
    }
    return str;
}

function combinedCount(val: number): void {
    console.log(countdown(val) + countup(val));
}

combinedCount(5);