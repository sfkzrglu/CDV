// Create a class called "Lamp" that contains two protected integer variables: "watt" initialized to 75 and "lumens" initialized to 900. This class should have two methods:

// - "GetLumens()": This method asks the object how many lumens it has.
// - "SetWatt(newWatt)": This method changes the number of watts used by the lamp. This method should calculate and change the lumens using the formula: "newLumens = newWatt * 12".

// Create another class called "LEDLamp" that extends the "Lamp" class. This class should have two methods:

// - "GetWatt()": This method asks the object how much power in watts the lamp has.
// - "SetWatt(newWatt)": This method changes the number of watts used by the lamp. This method should calculate and change the lumens using the formula: "lumens = newWatt * 70".

// The program should create one object, "luce," of type "Lamp," and one object, "phoenix," of type "LEDLamp." Call and display the results of the following methods in sequence:

// 1. luce.SetWatt(30)
// 2. phoenix.SetWatt(30)
// 3. luce.GetLumens()
// 4. phoenix.GetLumens()

// -----
// 360
// 2100
 

class Lamp{
    protected watt:number=75;
    protected lumens:number=900;

    SetWatt(watt:number){
        this.watt=watt;
        this.lumens = watt * 12;
    }

    GetLumens(){
        return this.lumens;
    }
}

class LEDLamp extends Lamp{
    temperature:number=19.0;

    GetWatt(){
        this.watt;
    }

    SetWatt(watt:number){
        this.watt=watt;
        this.lumens = watt * 70;
    }
}

let luce=new Lamp();
let phoenix=new LEDLamp();
luce.SetWatt(30);
phoenix.SetWatt(30);
luce.GetLumens();
phoenix.GetLumens();

console.log(luce.GetLumens());
console.log(phoenix.GetLumens());
