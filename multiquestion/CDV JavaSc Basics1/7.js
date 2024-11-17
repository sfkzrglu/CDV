// Write a program that creates a single array variable with the values 8,5,2,9,3.
// Using a loop, the program prints the largest number of these numbers.

// Sample output of this program:
// 9
 

let arr=[8,5,2,9,3];
let temp=arr[0];
for (let i = 0; i < arr.length; i++) {
     if (arr[i]>temp) {
        temp=arr[i];
    }  
}
console.log(temp);