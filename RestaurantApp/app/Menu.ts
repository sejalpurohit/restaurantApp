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
        console.log(`${this.name} available from  ${this.start_time} o'clock to ${this.end_time}o'clock. `);

}

//get complete menu details
complete_menu(menu_list:object):object{
    console.log(menu_list);
    let menu_details:object={};
    let menu_name = Object.keys(menu_list);
    for(let name of menu_name){
        if(name === this.name){
            
            menu_details[this.name]=this.items;
            return menu_details;
        }

    }
}

//get the bill of ordered Items
calculate_bill(purchased_items:string[],menu_list?:object):number{
    let values;
    let bill = 0;
    
if(menu_list){

    let value_menu_list = Object.keys(menu_list).map(key => menu_list[key]);
    for(let details of value_menu_list){
        for(let element  of purchased_items){
            values = +(Object.keys(details).filter((key)=> key===element).map(key => details[key])); 
            bill+=+(values);
        }
    }
return bill;   
}
else{

    for(let element  of purchased_items){
        values = +(Object.keys(this.items).filter((key)=> key===element).map(key => this.items[key])); 
        bill+=+(values);
    }
    
}
return bill;
}
}



let menu_list ={brunch, early_bird ,kids, dinner};

export let brunch_menu = new Menu("brunch",brunch, '11', '16');


brunch_menu.timing();
let brunch_bill =brunch_menu.calculate_bill(['pancakes','waffles','burger','abc']);
console.log('Your Total Bill :'+brunch_bill);
let completeBrunchMenu = brunch_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeBrunchMenu);
let brunch_another_bill= brunch_menu.calculate_bill(['pancakes','waffles','burger','abc'],completeBrunchMenu); //passing Optional argument
console.log(brunch_another_bill);


export let early_bird_menu = new Menu("early_bird",early_bird, '15', '18');
early_bird_menu.timing();
let early_bird_bill =early_bird_menu.calculate_bill(['salumeria plate','salad and breadsticks (serves 2, norefills)',
'pizza with quattro formaggi']);
console.log('Your Total Bill :'+early_bird_bill);
let completeEarlyBirdsMenu = early_bird_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeEarlyBirdsMenu);
let earlyBird_another_bill= early_bird_menu.calculate_bill(['salad and breadsticks (serves 2, norefills)'],completeEarlyBirdsMenu);//passing Optional argument
console.log(earlyBird_another_bill);

export let dinner_menu = new Menu("dinner",dinner, '17', '23');
dinner_menu.timing();
let dinner_bill =dinner_menu.calculate_bill(['crostini with eggplant caponata','ceaser salad','pizza with quattro formaggi']);
console.log('Your Total Bill :'+dinner_bill);
let completeDinnerMenu = dinner_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeDinnerMenu);
let dinner_another_bill= dinner_menu.calculate_bill(['ceaser salad','pizza with quattro formaggi'],completeDinnerMenu);//passing Optional argument
console.log(dinner_another_bill);


export let kids_menu = new Menu("kids",kids, '11', '21');
kids_menu.timing();
let kids_bill =kids_menu.calculate_bill(['chicken nuggets','fusilli with wild mushrooms']);
console.log('Your Total Bill :'+kids_bill);
let completeKidsMenu = kids_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeKidsMenu);
let kids_another_bill= kids_menu.calculate_bill(['pizza with quattro formaggi'],completeKidsMenu);//passing Optional argument
console.log(kids_another_bill);

export let arepa_menu = new Menu("arepa",arepa, '11', '20');
arepa_menu.timing();
let arepa_bill =arepa_menu.calculate_bill(['arepa pabellon','pernil arepa','guayanes arepa']);
console.log('Your Total Bill :'+arepa_bill);
let completeArepaMenu = arepa_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeArepaMenu);
let arepa_another_bill= arepa_menu.calculate_bill(['pizza with quattro formaggi'],completeArepaMenu);//passing Optional argument
console.log(arepa_another_bill);













