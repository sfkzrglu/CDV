// Write a program that randomizes from 0 to 30 for 10 times and each time it prints this number and adds this number to the sum.
// Finally, the program displays the total.
// Sample output of this program:
// 5
// 15
// 12
// ...
// 8
// 29
// 6
// Sum: 127
 

var sum=0;
for (var i = 0; i <= 10; i++) {
  let rnd=Math.floor(Math.random()*30);
  sum+=rnd;
  console.log(rnd);
}
console.log("sum: "+sum);