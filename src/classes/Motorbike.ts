// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    // Call the parent class constructor
    // super(vin, color, make, model, year, weight, topSpeed); 

    // Initialize the properties of the Motorbike class
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 2 elements
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()]; // Create 2 new default Wheel objects
    } else {
      this.wheels = wheels; // Use the provided wheels
    }
  }

  // Method specific to Motorbike
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Example usage
  static exampleUsage() {
    const myMotorbike = new Motorbike("VIN123", "Red", "Yamaha", "YZF-R3", 2021, 200, 180, [new Wheel(), new Wheel()]);
    myMotorbike.wheelie(); // Output: Motorbike Yamaha YZF-R3 is doing a wheelie!
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the printDetails method of the parent class, Vehicle

    // Log the details of the Motorbike
    console.log(`Details of the Motorbike:`);
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }
}
// Export the Motorbike class as the default export
export default Motorbike;
