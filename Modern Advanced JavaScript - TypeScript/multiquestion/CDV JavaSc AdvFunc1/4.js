// Write a function called 'welcome' that uses currying to create a personalized greeting.
// The function should take a name as its first argument, and then return a function that takes a greeting and combines it with the name to create a personalized message.

// const helloJohn = greet('John')('Hello');
// console.log(helloJohn()); // Hello John!

function welcome(name) {
    return function(greeting) {
        return function() {
            return `${greeting} ${name}!`;
        };
    };
}

const helloJohn = welcome('John')('Hello');
console.log(helloJohn());