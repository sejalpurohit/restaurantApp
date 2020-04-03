import { brunch ,early_bird ,dinner, kids,arepa } from "./Objects";
import { Menu } from "./Restaurant";

export class Franchise{

    address:string;
    name:string;
    menuList:object[]

    constructor(name:string,address:string,menuList:object[]){
        this.name = name;
        this.address=address;
        this.menuList=menuList;
    }

    stores():string{
        return `${this.name} is located at ${this.address}`;
    }    

    availability(time:number){
        let nameofItem: string[];
        let name:string;
        console.log('Available Menu ');
        for(let elements of menuList){  
               let  startTime = +Object.keys(elements).filter((key)=> key==='start_time').map(key => elements[key]);
                let endTime = +Object.keys(elements).filter((key)=> key==='end_time').map(key => elements[key]);           
        
                if(time >= startTime && time <= endTime){
                    name = Object.keys(elements).filter((key)=> key==='name').map(key => elements[key]).toString();
                    console.log(name);
                                                  
                 }
        }
    }
}

let menuList:object[] = [ 
    {name:'brunch',item:brunch, start_time:11, end_time:16},
    {name:'early_birds', item:early_bird , start_time:15, end_time:18},
    {name:'dinner', item:dinner, start_time:15, end_time:23},
    {name:'kids',item:kids,  start_time:11, end_time:21},
    {name:'arepa',item:arepa,start_time:10, end_time:20}
    ];


export let flagShip =new Franchise('flagship_store','123 West Street Road',menuList);
console.log(flagShip.stores());
flagShip.availability(17);

export let installment = new Franchise('new_installment','456 East Street Road',menuList);
console.log(installment.stores());
installment.availability(21);

export let healthyBites = new Franchise('HealthyBites','789North Street Road',menuList);
console.log(healthyBites.stores());
healthyBites.availability(21);
