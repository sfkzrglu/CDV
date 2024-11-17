// Using random 0-15, the program randomly selects one number 'max'. Then, the program prints all numbers from 0 to 10, but at each step, it also prints all numbers from 1 to 'max' with an additional comma.

// 0 – 1, 2, 3,
// 1 – 1, 2, 3,
// 2 – 1, 2, 3,
// ...
// 8 – 1, 2, 3,
// 9 – 1, 2, 3,
// 10 – 1, 2, 3,
 

let randomNumber = Math.round(Math.random() * 16);
for (let i = 0; i <= 10; i++) {
    let str: string = i+" - ";
    for (let j = 1; j <= randomNumber; j++) {
        str += j+","; 
    }
    console.log(str);
}