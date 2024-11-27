// Create a class called "Cabinet" that contains one integer variable, "capacity," initialized to 0. This class should have two methods:

// - "SetCapacity(arg)": This method sets the capacity of the cabinet.
// - "GetCapacity()": This method asks for and returns the capacity of the cabinet.

// Create another class called "Refrigerator" that extends the "Cabinet" class and also contains one float variable, "temperature," initialized to 19. This class should have two methods:

// - "SetTemperature(arg)": This method sets the temperature inside the refrigerator.
// - "DetTemperature()": This method asks for and returns the temperature inside the refrigerator.

// The program should create one object, "amica," of type "Refrigerator." Call the methods to set the capacity to 25 and the temperature to 3. Finally, call and display the results of "amica.GetCapacity()" and "amica.GetTemperature()".

// ------
// 25
// 3
 

class Cabinet{
    capacity:number=0;

    SetCapacity(capacity:number){
        this.capacity=capacity;
    }

    GetCapacity(){
        return this.capacity;
    }
}

class Refrigerator extends Cabinet{
    temperature:number=19.0;

    SetTemperature(temperature:number){
        this.temperature=temperature;
    }

    GetTemperature(){
        return this.temperature;
    }
}

let amica=new Refrigerator();
amica.SetCapacity(25);
amica.SetTemperature(3);

console.log(amica.GetCapacity());
console.log(amica.GetTemperature());