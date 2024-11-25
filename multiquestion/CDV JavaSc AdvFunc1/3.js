// 1. Convert the following impure function to a pure one.
// 2. Add extra code to show that the function is really pure.
// Given code:
// function multiplyByTwo(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }

let myArr=[1,2,3];

function multiplyByTwo(arr) {
    let _arr=[...arr];
    for(let i = 0; i < arr.length; i++) {
        _arr[i] = _arr[i] * 2;
    }
    return _arr;
}

console.log(myArr);
console.log(multiplyByTwo(myArr));
console.log(myArr);