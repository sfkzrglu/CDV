// Write a program that will print all even numbers (using the modulo operation) from 20 to 80 on the screen. At the end, it should print "Thank you."

// 20
// 22
// 24
// …
// 76
// 78
// 80
// Thank You
 

for(let i=20;i<=80;i++)
{
    if(i%2==0){
        console.log(i);
    }
}
console.log("Thank You");