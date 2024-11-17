// Write a program that randomly selects numbers from 0 to 20, until the number selected is exactly 10.
// Sample output of this program:
// 3
// 18
// 17
// 19
// 6
// 10
// Given code:
// let rnd=Math.floor(Math.random()*???);
 

let rnd=0;
do
{
  rnd=Math.floor(Math.random()*20);
  console.log(rnd);
}while(rnd!==10);