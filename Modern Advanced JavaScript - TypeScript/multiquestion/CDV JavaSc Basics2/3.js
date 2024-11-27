// Write a program with at least two functions that will allow you to:
// 1. add an item to the end of the list.
// 2. remove the last item from the list.
// Although the basic data structure in JS should be an array, add and remove operations should act like a stack.

// For example:
// add("fiat");
// add("bmw");
// add("Mercedes");
// remove(); // mercedes
// remove(); // bmw
 

let stack = [];

function add(item) {
    stack.push(item); 
}

function remove() {
    if (stack.length >0) {
        stack.pop(); 
    }
}

add("fiat");
add("bmw");
add("Mercedes");
remove(); // mercedes
remove(); // bmw