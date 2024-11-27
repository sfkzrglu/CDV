// Create a function that takes three arguments and uses conditional statements to determine the largest argument, then returns it.
// The program should call this function twice, once with arguments (5, 2, 3) and display the result, and once with arguments (20, 33, 17) and display the result.

// 5
// 33

function myFunction(val1:number,val2:number,val3:number):number{
    if (val1 >= val2 && val1 >= val3) {
        return val1;
    } else if (val2 >= val1 && val2 >= val3) {
        return val2;
    } else {
        return val3;
    }
}

console.log(myFunction(5,2,3));
console.log(myFunction(20,33,17));