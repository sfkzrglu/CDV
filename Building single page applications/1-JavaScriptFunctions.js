//TASK 1

function square(n) {
  return n * n
}


//1.2
let arr = [1, 2, 3, 4]

//a

for (let i = 0; i < arr.length; i++) {

  console.log(square(arr[i]))

}

console.log()

//b

for (let a of arr) {

  console.log(square(a))

}

console.log()

//c

for (let a in arr) {

  console.log(square(arr[a]))

}

console.log()

arr.forEach((k) => console.log(square(k)))



//1.3

const arrFunc = (k) => {

  console.log(square(k))

}

arr.forEach((k) => arrFunc)

console.log()





//TASK 2

function sum(...params) {

  if (!params) return NaN

  let s = 0

  params.forEach((k) => (s += k))

  return s

}

console.log(sum(1, 2, 3))



//TASK 3

function alter() {

  let alter = true;

  function helper() {

    alter = !alter

    return alter

  }

  return helper;

}

const a = alter();

console.log(a())

console.log(a())

console.log(a())