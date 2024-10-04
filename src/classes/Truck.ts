// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class extends the Vehicle class and AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
    // super(vin, color, make, model, year, weight, topSpeed); // Call the parent class constructor
    super(),
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Method specific to Truck
  loadCargo(amount: number): void {
    console.log(`Loaded ${amount} units of cargo into the truck.`);
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleWeight = vehicle.weight; // Assuming weight is a property of the vehicle classes
    if (vehicleWeight <= this.towingCapacity) {
      console.log(`Towing ${vehicle.make} ${vehicle.model}.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
    }
  }

  override printDetails(): void {
    super.printDetails(); // Call the printDetails method of the parent class, Vehicle

    console.log
  }
}
  // Export the Truck class as the default export
export default Truck;
