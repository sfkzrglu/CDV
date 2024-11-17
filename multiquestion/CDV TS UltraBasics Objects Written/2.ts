// Create a class named "Bucket" with one variable "liters" initialized to 7 and one method named "getLiters()" that returns the value of liters in the bucket.
// The program creates one object of type "Bucket" and displays the number of liters by calling the "getLiters()" method.

// -------
// Bucket has 7 litres.
 

class Bucket {
    liters: number = 7;

    getLiters(): number {
        return this.liters;
    }
}

const myBucket = new Bucket();
console.log(`Bucket has ${myBucket.getLiters()} litres.`);









