// Task 1
// 1. Define a class Person to represent people with name and age. Define the appropriate 2-
// argument constructor in the class and the toString() method returning the text
// representation of the object's content in the format "Marek, 25 years old".
class Person {
    constructor(name, age) {
        this.name = Person.formatName(name);
        this.age = age;
    }

    toString() {
        return `${this.name}, ${this.age} years old`;
    }

    static formatName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    set name(name) {
        this._name = Person.formatName(name);
    }

    get name() {
        return this._name;
    }

    set age(age) {
        if (typeof age !== "number") {
            throw new TypeError("Age must be a number");
        }
        if (age <= 0) {
            throw new RangeError("Age must be greater than 0");
        }
        this._age = age;
    }

    get age() {
        return this._age;
    }
}

// 2. Create a Person class instance and display its text representation on the console using
// the toString() method.
let person = new Person("Marek", 25)
console.log(person.toString());
// 3. Change the name and age of the Person object you have created.
person.name = "John"
person.age = 30
// 4. Display the object on the console again to verify that the changes have been applied.
console.log(person.toString());
// Task 2
// 1. Define the Employee class to represent employees with name, age, and job as a subclass
// of the Person class. Define a suitable 3-argument constructor and a toString() method in
// the class that returns a text representation of the object's contents in the format
// "Marek, 25 years old, working as a teacher".
// a. In the Employee class constructor, call the constructor of the Person class, letting
// it initialize the name and age fields
// b. In the implementation of the toString() method, call the toString() method from
// the superclass
// 2. Create an Employee class instance and display it on the console using the toString()
// method.
class Employee extends Person {
    constructor(name, age, job) {
        super(name, age)
        this.job = job
    }
    toString() {
        return `${super.toString()}, working as ${this.job}`
    }
}
let employee = new Employee("Marek", 25, "teacher")
console.log(employee.toString());
// 3. Change the age and job of the Employee object you have created.
employee.name = "john"
employee.age = 30
// 4. Display the object on the console again to verify that the changes have been applied.
// Task 3
console.log(employee.toString());
// 1. Change the implementation of the Person class so that the name and age are handled by
// setters and getters.
// 2. Verify that after modifying the Person class, creating, modifying and displaying the
// Employee class object continues to work correctly.
employee.age = 35
console.log(employee.toString());
// Task 4
// 1. Change the setter for the name in the Person class so that the name is always saved in
// the object in the format: the first letter is capital, and the remaining ones are small. For
// this purpose:
// a. Define a static method in the Person class, formatName(), which will transform a
// string passed to it to the desired name format
// b. Modify the name setter so that it formats the provided name using the static
// method created earlier
// 2. Guarantee the correct name format when the object is being created using the
// constructor.
// 3. Check if the name formatting works correctly.
employee.name = "Marek";
console.log(employee.toString());
// Task 5
// 1. Change the setter for an age in the Person class so that the age must be a number
// greater than 0.
// a. If the passed value is not a number, the setter should throw a TypeError
// exception
// b. If the passed value is a number but is not greater than 0, the setter should throw
// a RangeError exception
// 2. Check the behavior of the program for incorrect age values.
// Task 6
// 1. Surround the employee age change operation with a try/catch statement. For each of
// the expected exceptions (TypeError, RangeError), handle the exception by displaying a
// message on the console describing the cause of the error.
// 2. Check the behavior of the program for incorrect and correct age values.
try {
    employee.age = -5;
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    employee.age = "thirty";
} catch (error) {
    console.error(`Error: ${error.message}`);
}
try {
    employee.age = 35;
    console.log(employee.toString());
} catch (error) {
    console.error(`Unexpected error: ${error.message}`);
}