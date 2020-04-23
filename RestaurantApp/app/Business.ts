import { flagship_store,new_installment, healthyBites} from "./Franchise";

class Business{
    name:string;
    franchise:object[];

    constructor(name:string,franchise:object[]){
        this.name=name;
        this.franchise=franchise;
    }
}


let franchise:object[] =[flagship_store ,new_installment, healthyBites];
let TastyDrips= new Business('TastyDrips',franchise);

console.log(TastyDrips);
