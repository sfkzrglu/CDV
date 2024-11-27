// The program creates an array variable with 15 slots.
// Using a loop and a random number generator (range from 0 to 30), the program generates 15 random numbers and stores them in the array.
// Finally, using another loop, it reads the values from the array and displays them.

// 5
// 21
// 3
// …
// …
// 11
// Given code:
//  let randomNumber = Math.round(Math.random() * 31);
 

let numbers: number[] = new Array(15);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.round(Math.random() * 30);
}

for (let number of numbers) {
    console.log(number);
}