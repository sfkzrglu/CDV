// Add some code to the following program to show that the function is impure.
// Given code:
// function multiplyByTwo(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }

let myArr=[1,2,3];

function multiplyByTwo(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

console.log(myArr);
console.log(multiplyByTwo(myArr));
console.log(myArr);