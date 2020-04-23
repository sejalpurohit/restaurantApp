import {brunch_menu ,early_bird_menu, dinner_menu, kids_menu ,arepa_menu} from "./Menu";


export class Franchise{

    address:string;
    menuList:object[]

    constructor(address:string,menuList:object[]){
        this.address=address;
        this.menuList=menuList;
    }

    store_address():string{
        return `is located at ${this.address}`;
    }    

    available_menus(time:number):string[]{
        let nameofItem: string[]=[];
        let name:string;
       
        for(let elements of this.menuList){  
               let  startTime = +Object.keys(elements).filter((key)=> key==='start_time').map(key => elements[key]);
                let endTime = +Object.keys(elements).filter((key)=> key==='end_time').map(key => elements[key]);           
        
                if(time >= startTime && time <= endTime){
                    name = Object.keys(elements).filter((key)=> key==='name').map(key => elements[key]).toString();
                    nameofItem.push(name);
                                                  
                 }
                 
        }
        if(nameofItem.length !== 0){
            return (nameofItem);
        }
        else{
            return ['No Menu Available at this Time :('];
            
        }
    }
}

export let menuList:object[] = [brunch_menu,early_bird_menu, dinner_menu, kids_menu];

export let newMenuList:object[]=[arepa_menu];

export let flagship_store =new Franchise('123 West Street Road',menuList);
console.log('Flagship_store '+flagship_store .store_address());
console.log('Available Menu: '+flagship_store .available_menus(17));

export let new_installment = new Franchise('456 East Street Road',menuList);
console.log('New_installment '+new_installment.store_address());
console.log('Available Menu: '+new_installment.available_menus(21));

export let healthyBites = new Franchise('789North Street Road',newMenuList);
console.log('HealthyBites '+healthyBites.store_address());
console.log('Available Menu: '+healthyBites.available_menus(21));


