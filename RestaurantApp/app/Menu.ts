import { brunch ,early_bird ,dinner, kids , arepa } from "../data/menu.mock";


export class Menu{
    name: string;
    items:object;
    start_time:string;
    end_time:string;


constructor(name:string, items:object,  start_time:string, end_time:string ){
    this.name = name;
    this.items=items;
    this.start_time=start_time;
    this.end_time=end_time;
}

//get the timing of each meal
timing(){
        console.log(`${this.name} available from  ${this.start_time}am to ${this.end_time}pm. `);

}
//get the bill of ordered Items
calculate_bill(purchased_items:string[]):number{
    let values;
    let bill = 0;
    for(let element  of purchased_items){
        values = +(Object.keys(this.items).filter((key)=> key===element).map(key => this.items[key])); 
        bill+=+(values);
    }
    return bill;

}
}

export let brunch_menu = new Menu("brunch",brunch, '11', '12');
let brunch_bill =brunch_menu.calculate_bill(['pancakes','waffles','burger','abc']);
console.log('Your Total Bill :'+brunch_bill);

export let early_bird_menu = new Menu("early_bird",early_bird, '15', '18');
let early_bird_bill =early_bird_menu.calculate_bill(['salumeria plate','salad and breadsticks (serves 2, norefills)',
'pizza with quattro formaggi']);
console.log('Your Total Bill :'+early_bird_bill);

export let dinner_menu = new Menu("dinner",dinner, '15', '23');
let dinner_bill =dinner_menu.calculate_bill(['crostini with eggplant caponata','ceaser salad','pizza with quattro formaggi']);
console.log('Your Total Bill :'+dinner_bill);

export let kids_menu = new Menu("kids",kids, '11', '21');
let kids_bill =kids_menu.calculate_bill(['chicken nuggets','fusilli with wild mushrooms']);
console.log('Your Total Bill :'+kids_bill);

export let arepa_menu = new Menu("arepa",arepa, '11', '20');
let arepa_bill =arepa_menu.calculate_bill(['arepa pabellon','pernil arepa','guayanes arepa']);
console.log('Your Total Bill :'+arepa_bill);






