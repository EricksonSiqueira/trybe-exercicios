export interface DrivingVehicle {
  drive() : void;
}

export interface FlyingVehicle {
  fly(): void;

}


export interface IVehicle extends FlyingVehicle, DrivingVehicle { }