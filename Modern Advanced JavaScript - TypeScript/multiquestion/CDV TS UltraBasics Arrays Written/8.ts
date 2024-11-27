// The program prints all numbers from 50 to 70, and at each step, it also prints all numbers from 1 to 5 (within a loop) with an additional comma.

// 50 – 1, 2, 3, 4, 5,
// 51 – 1, 2, 3, 4, 5,
// 52 – 1, 2, 3, 4, 5,
// ...
// 68 – 1, 2, 3, 4, 5,
// 69 – 1, 2, 3, 4, 5,
// 70 – 1, 2, 3, 4, 5,
 

for (let i = 50; i <= 70; i++) {
    let str: string = i+" - ";
    for (let j = 1; j <= 5; j++) {
        str += j+","; 
    }
    console.log(str);
}