// Create a class called "Heater" that contains one integer variable, "watt," initialized to 0. This class should have two methods:

// - "SetWatt(arg)": This method sets the wattage in the object.
// - "GetWatt()": This method asks the object how many watts of power it has.

// Create a class called "Kettle" with one float variable, "liters," initialized to 0. This class extends the "Heater" class. It should have a constructor with two arguments, "liters" and "watt."

// This class should also have one method:

// - "GetLiters()": This method asks the object how many liters it contains.

// Create another class called "Iron" with one integer variable, "temp," initialized to 0. This class extends the "Heater" class. It should have a constructor with two arguments, "temp" and "watt."

// This class should also have one method:

// - "GetTemp()": This method asks the object for its temperature.

// The program should create one object, "edenberg," of type "Kettle," which contains 1.7 liters and operates at 1800 watts, and one object, "philips," of type "Iron," with a temperature of 190 and 900 watts.

// Call and display the results of "edenberg.GetWatt()" and "philips.GetWatt()".

// -------
// 1800
// 900
 

class Heater{
    watt:number=0;

    SetWatt(watt:number){
        this.watt=watt;
    }

    GetWatt(){
        return this.watt;
    }
}

class Kettle extends Heater{
    liters:number=0;

    constructor(liters:number,watt:number){
        super();
        this.liters=liters;
        this.watt=watt;
    }

    GetLiters(){
        this.liters;
    }

}

class Iron extends Heater{
    temp:number=0;

    constructor(temp:number,watt:number){
        super();
        this.temp=temp;
        this.watt=watt;
    }

    GetTemp(){
        return this.temp;
    }
}

let edenberg=new Kettle(1.7,1800);
let philips=new Iron(190,900);

console.log(edenberg.GetWatt());
console.log(philips.GetWatt());