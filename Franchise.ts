import { brunch ,early_bird ,dinner, kids,arepa } from "./Objects";
import { Menu } from "./Restaurant";

export class Franchise{

    name:string;
    address:string;
    menuList:object[]

    constructor(name:string,address:string,menuList:object[]){
        this.name = name;
        this.address=address;
        this.menuList=menuList;
    }

    stores():string{
        return `${this.name} is located at ${this.address}`;
    }    

    availability(time:number):string[]{
        let nameofItem: string[]=[];
        let name:string;
       
        for(let elements of menuList){  
               let  startTime = +Object.keys(elements).filter((key)=> key==='start_time').map(key => elements[key]);
                let endTime = +Object.keys(elements).filter((key)=> key==='end_time').map(key => elements[key]);           
        
                if(time >= startTime && time <= endTime){
                    name = Object.keys(elements).filter((key)=> key==='name').map(key => elements[key]).toString();
                    nameofItem.push(name);
                                                  
                 }
        }
        return (nameofItem);
    }
}

export let menuList:object[] = [ 
    {name:'brunch',item:brunch, start_time:11, end_time:16},
    {name:'early_birds', item:early_bird , start_time:15, end_time:18},
    {name:'dinner', item:dinner, start_time:15, end_time:23},
    {name:'kids',item:kids,  start_time:11, end_time:21},
    {name:'arepa',item:arepa,start_time:10, end_time:20}
    ];


export let flagShip =new Franchise('flagship_store','123 West Street Road',menuList);
console.log(flagShip.stores());
console.log('Available Menu '+flagShip.availability(17));

export let installment = new Franchise('new_installment','456 East Street Road',menuList);
console.log(installment.stores());
console.log('Available Menu '+installment.availability(21));

export let healthyBites = new Franchise('HealthyBites','789North Street Road',menuList);
console.log(healthyBites.stores());
console.log('Available Menu '+healthyBites.availability(21));

