// Write a program that prints all numbers from 1 to 10, but when the number is even, the program additionally prints 5 pluses using a separate loop.

// Sample output of this program:
// 1
// 2 +++++
// 3
// 4 +++++
// ...
// 8 +++++
// 9
// 10 +++++
 

for (let i = 1; i <= 10; i++) {
  let str=i+" ";
  if (i%2==0) {
    for (let i = 0; i < 5; i++) {
      str+="+";
    }
  }
  console.log(str);
}