// Write a program that randomly selects one number and if that number is less than 50, the program prints all even numbers from the random number to 50.
// Sample output of this program:
// 26
// 28
// 30
// ...
// 46
// 48
// 50
// Given code:
// let rnd=Math.floor(Math.random()*???);
 

let rnd=Math.floor(Math.random()*100);
  for (let i = rnd; i <= 50; i++) {
    if (i%2==0) {
      console.log(i);
    }
  }