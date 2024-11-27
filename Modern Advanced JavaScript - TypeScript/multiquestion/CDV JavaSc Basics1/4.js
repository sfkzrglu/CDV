// Write a program that prints all the numbers from 10 to 1, but each time, on the same line, using a different loop, the program will print the numbers from 0 to 5.
// Sample output of this program:
// 10 012345
// 9 012345
// 8 012345
// 7 012345
// ...
// 2 012345
// 1 012345
 

for (let i = 10; i>0; i--) {
  let str="";
  for (let k = 0; k < 6; k++) {
    str+=k;
  }
  console.log(i+" "+str);
}