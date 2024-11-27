// The program creates an array variable with the values 7, 9, 6, 8, 2.
// Using a LOOP, an additional variable, and a condition, the program iterates through all the values while keeping track of the largest number. At the end, it displays this largest number.

// 9
 

let values: number[] = [7, 9, 6, 8, 2];
let largest: number = values[0];

for (let i = 1; i < values.length; i++) {
    if (values[i] > largest) {
        largest = values[i];
    }
}

console.log(largest);