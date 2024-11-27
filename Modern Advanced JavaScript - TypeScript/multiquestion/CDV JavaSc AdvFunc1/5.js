// Write a function called add that uses currying to add n numbers together.
// The function should take a single number as its first argument, and then return a function that takes the next number and adds it to the previous sum.
// The final function should return the sum of all the numbers.

// ex.
// console.log(add(1)(2)(3)(4)()); // 10

function add(number){
    return function(nextNumber){
      if(nextNumber){
        return add(number+nextNumber)
      }
      return number;
    } 
  }

console.log(add(1)(2)(3)(4)()); 