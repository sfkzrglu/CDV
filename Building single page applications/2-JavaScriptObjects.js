// JavaScript: Objects - Lab
// Task 1
// 1. Not using a constructor and a prototype for now, create an object representing a car,
// having 3 attributes: brand, price and power and a method incPower (with one argument
// to pass a value by which the power is to be increased).
class Car {
    brand = ''
    price = 0
    power = 0
    incPower(val) {
        this.power += val
    }
}
// 2. Display the created car object on the console using the following statement:
// console.log(car)
// where “car” is your variable name holding the reference to the created car object.
let car = new Car()
console.log(car);
// 3. Increase the power of the car by calling the appropriate method.
car.incPower(2)
// 4. Display the created car object on the console once again.
console.log(car);
// 5. Crate the constructor function called Car to create objects like the one created manually
// in previous steps. Use a prototype to guarantee that objects created with the Car
// constuctor will accept incPower method calls.
class Car2 {
    constructor(brand,price,power) {
        this.brand = brand
        this.price = price
        this.power = power
    }
}
Car2.prototype.incPower = function (val) {
    this.power += val
}
Car2.prototype.toString = function () {
    return JSON.stringify(this);
}
// 6. Create an array with 3 Car objects (newly created with the constructor).
let cars=[new Car2('abc',200000,10000),new Car2('yhj',2000,800),new Car2('lkj',10000,5000)]
// 7. Use a for loop to display all the cars from the array on the console.
for (const element of cars) {
    console.log(element);
}
// 8. Increase the power of one of the cars stored in the array by calling the incPower method.
cars[0].incPower(100)
// 9. Use a for loop to display all the cars from the array on the console again.
for (const element of cars) {
    console.log(element);
}
// 10. Check if cars can be converted to a string by calling the toString method on one of them.
// Where is the method responsible for the obtained output defined?
console.log(cars[0].toString());
// 11. Add a custom implementation of the toString method to the prototype of cars created
// with the Car constructor. The output of the method should be similar to this:
// “{brand: Fiat, price: 45000, power: 125}”
console.log(cars[0].toString());
// 12. Check if your implementation of toString works by calling it on one of the previously
// created car objects.
console.log(car.toString());

// Task 2
// 1. Generate a JSON representation of one of the car objects created in the previous task.
// Display the resulting JSON on the console. What happened to the object’s methods?
let jsn=JSON.stringify(cars[0])
console.log(jsn);
// 2. Create manually a JSON string describing a structure of a car object. Convert the JSON
// string to a JavaScript object. Display the object on the console.
let str='{"brand":"asd","price":10000,"power":1000}'
let jsn2=JSON.parse(str)
console.log(str);