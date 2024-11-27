// Write a function called 'lastLetter' that takes a string as an argument and returns the last letter of the string.
// For example lastLetter('JavaScript') should return 't'.


function lastLetter(str){
  return str.charAt(str.length-1);
}
console.log(lastLetter('JavaScript'));