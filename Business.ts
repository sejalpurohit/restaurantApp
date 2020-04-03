import {Franchise} from "./Franchise"
import { brunch ,early_bird ,dinner, kids } from "./Objects";
import { flagShip,installment, healthyBites} from "./Franchise";

class Business{
    name:string;
    franchise:object[];

    constructor(name:string,franchise:object[]){
        this.name=name;
        this.franchise=franchise;
    }
}


let franchise:object[] =[flagShip ,installment, healthyBites];
let TastyDrips= new Business('TastyDrips',franchise);

console.log(TastyDrips);
