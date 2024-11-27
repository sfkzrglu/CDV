// Create an interface called "Fuel" that describes two methods: "GetFuel()" and "SetFuel(amount)".
// Create another interface called "Gas" that describes two methods: "GetGas()" and "SetGas(amount)".
// Create a class called "Engine" that has one integer variable, "power," initialized to 0, and one method, "SetPower(power)."
// Create a class called "Car" that extends the "Engine" class and implements the "Fuel" and "Gas" interfaces.
// Create a class called "Bus" that extends the "Car" class and has one integer variable, "passengers," initialized to 0, and one method, "SetPassengers(count)."
// The program should create one object, "bus," of type "Bus." Call and display the results of the following methods in order:

// - `bus.SetFuel(45)`
// - `bus.SetGas(300)`
// - `bus.SetPassengers(45)`
// - `bus.SetPower(290)`
// - `bus.GetGas()`

// ------
// 300

interface Fuel{
    GetFuel() : number;
    SetFuel(amount:number) : void;
}
interface Gas{
    GetGas(): number;
    SetGas(amount:number) : void;
}
class Engine{
    power:number=0;

    SetPower(power:number) : void{
        this.power=power;
    }
}
class Car extends Engine implements Fuel,Gas{
    fuel:number=0;
    gas:number=0;

    GetFuel(): number {
       return this.fuel;
    }
    SetFuel(amount: number): void {
      this.fuel=amount;
    }
    GetGas() : number {
        return this.gas;
    }
    SetGas(amount: number): void {
      this.gas=amount;
    }
  
}
class Bus extends Car{
    passengers:number=0;

    SetPassengers(count:number): void{
        this.passengers=count;
    }
}
let bus=new Bus();
bus.SetFuel(45);
bus.SetGas(300);
bus.SetPassengers(45);
bus.SetPower(290);
console.log(bus.GetGas());