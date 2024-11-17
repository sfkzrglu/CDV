// Write a program with two functions that will enable text encryption and decryption.
// The type of Encryption used should be very simple, e.g. converting characters into other characters etc.

// For example:
// encrypt("WSB"); // DUY (alphabet shift & inversion)
// decrypt("DUY"); // WSB
 

let key=7;
function encrypt(str) {
    let splitted=str.toLowerCase().split("");
    let asciis=[];
    let encryptedStr="";
    for (let item of splitted) {
        let newNumber=item.charCodeAt(0)+key;
        if (newNumber>122) {
            newNumber=item.charCodeAt(0)+key-26;
        }
         asciis.push(newNumber);
    }
    for (let item of asciis) {
        encryptedStr+=String.fromCharCode(item);
    }
    return encryptedStr;
}

function decrypt(str) {
    let splitted=str.toLowerCase().split("");
    let asciis=[];
    let decryptedStr="";
    for (let item of splitted) {
        let newNumber=item.charCodeAt(0)-key;
        if (newNumber<97) {
            newNumber=item.charCodeAt(0)-key+26;
        }
         asciis.push(newNumber);
    }
    for (let item of asciis) {
        decryptedStr+=String.fromCharCode(item);
    }
    return decryptedStr;
}

let e=encrypt("hello");
console.log(e);
let d=decrypt(e);
console.log(d);