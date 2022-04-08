import { FlyingVehicle } from "./interfaces";

class AirPlane implements FlyingVehicle {
  fly(): void {
    console.log('Flying a air plane');
  }
}

export default AirPlane;
