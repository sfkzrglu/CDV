// Write a program that prints all the numbers from 5 to -5, but each time, on the same line, using a different loop, the program will print the numbers from 1 to 5.
// Sample output of this program:
// 5 12345
// 4 12345
// 3 12345
// ...
// 0 12345
// ...
// -4 12345
// -5 12345
 

for (let i = 5; i>-6; i--) {
  let str="";
  for (let k = 1; k < 6; k++) {
    str+=k;
  }
  console.log(i+" "+str);
}