// Write a function called 'formatCurrency' that uses currying to add the currency symbol to a given number.
// The function should take the symbol as its first argument, and then return a function that takes the number and combines it with the symbol to create the number with the currency symbol.

// const dollar = formatCurrency('$');
// console.log(dollar(3)); // $3 

function formatCurrency(symbol){
    return (number)=>{
        return `${symbol}${number}`;
    }
}

const dollar = formatCurrency('$');
console.log(dollar(3));