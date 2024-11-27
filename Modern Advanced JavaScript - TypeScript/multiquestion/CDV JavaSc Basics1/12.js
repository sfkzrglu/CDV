// Create two functions: emoticonA and emoticonB.
// emoticonA writes the text " :P " and the emoticonB function writes the text " :D " .
// These functions have neither arguments nor return values.
// The program will then call these functions in turn: emoticonA, emoticonB, emoticonA, emoticonB
// Sample output of this program:
// :P
// :D
// :P
// :D
 

function emoticonA(){
  console.log(":P");
}``
function emoticonB(){
   console.log(":D");
}


emoticonA();
emoticonB();
emoticonA();
emoticonB();