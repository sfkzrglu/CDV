// Write a function called "reverse" that takes a string and returns the string written backwards.
// For example, reverse('JavaScript') should return 'tpircSavaJ'.

// Applying the function twice should return the original value, hence:
// reverse(reverse('JavaScript')) // JavaScript


function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse(reverse('JavaScript')));