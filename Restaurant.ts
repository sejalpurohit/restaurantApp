 import { brunch ,early_bird ,dinner, kids } from "./Objects";


export class Menu{
    name: string;
    items:object;
    start_time:string;
    end_time:string;


constructor(name:string, items:{},  start_time:string, end_time:string ){
    this.name = name;
    this.items=items;
    this.start_time=start_time;
    this.end_time=end_time;
}

//get the timing of eachh meal
timings(){
    switch(this.name.toLowerCase()){
        case "brunch" :{
            console.log('Brunch menu available from '+this.start_time+'am to '+this.end_time+'pm');
            break
        }
        case "early_bird":{
            console.log('Early_birds menu available from '+this.start_time+'am to '+this.end_time+'pm');
            break;
        }
        case "dinner": {
            console.log('Dinner menu available from '+this.start_time+'am to '+this.end_time+'pm');
            break;
        }
        case "kids":{
            console.log('Kids menu available from '+this.start_time+'am to '+this.end_time+'pm');
            break;
        }
        default :{
            console.log('Not Available');
            break;
        }

    }
    
    }
    calculate_bill(item:string[]):number{
        let values;
    let bill = 0;
    for(let element  of item){
        values = Object.keys(this.items).filter((key)=> key===element).map(key => this.items[key]); 
        console.log(element);
        bill+=+(values);
    }
    return bill;

}
}
let m1 = new Menu("brunch",brunch, '11', '12');


//m1.timings();
let bill =m1.calculate_bill(['pancakes','waffles','burger']);
console.log('Your Total Bill :'+bill);

console.log(dinner);




