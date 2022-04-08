import { IVehicle } from "./interfaces";

export default class FuturistCar implements IVehicle {
  drive() : void { console.log('Driving a futuristic car'); }

  fly() : void { console.log('Flying in a futuristic car'); }
}
