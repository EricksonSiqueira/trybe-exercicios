import { DrivingVehicle } from "./interfaces";

class Car implements DrivingVehicle {
  drive(): void {
    console.log('Driving a car');
  }
}

export default Car;
