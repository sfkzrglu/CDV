// Using Math.random 2-100, the program randomly selects one number, 'random'. Then the program prints all numbers from 1 to 'random', but when the current number is equal to half of the randomly chosen number, the program also prints "50%". Note: In the case of an odd randomly chosen number, the program may not display "50%."

// 20
// 2
// ...
// 9
// 10 – 50%
// 11
// …
// 20
// Given code:
// let randomNumber = Math.round(Math.random() * 99) + 2;
 

let randomNumber = Math.round(Math.random() * 99) + 2;
for(let i=0;i<randomNumber;i++)
{
    console.log((randomNumber/2==i)?i+" - 50%":+i);
}