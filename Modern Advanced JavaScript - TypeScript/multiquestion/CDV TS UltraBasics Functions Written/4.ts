// Create a function that takes two arguments. Using a loop, the function should print the first argument as many times as specified by the second argument.
// The program should call this function with arguments 77 and 3.

// 77
// 77
// 77
 

function myFunction(val:number,rep:number):void{
    for (let i = 0; i < rep; i++) {
        console.log(val);
    }
}

myFunction(77,3);