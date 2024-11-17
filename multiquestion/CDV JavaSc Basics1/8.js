// Write a program that creates a single array variable with the values 8,5,2,9,3.
// Using a loop, the program prints all the elements of the array but in reverse order.

// Sample output of this program:
// 3
// 9
// 2
// 5
// 8
 

let arr=[8,5,2,9,3];

for (let i = arr.length-1; i >0 ; i--) {
    console.log(arr[i]);
}