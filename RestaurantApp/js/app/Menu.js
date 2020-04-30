"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_mock_1 = require("../data/menu.mock");
var Menu = /** @class */ (function () {
    function Menu(name, items, start_time, end_time) {
        this.name = name;
        this.items = items;
        this.start_time = start_time;
        this.end_time = end_time;
    }
    //get the timing of each meal
    Menu.prototype.timing = function () {
        console.log(this.name + " available from  " + this.start_time + " o'clock to " + this.end_time + "o'clock. ");
    };
    //get complete menu details
    Menu.prototype.complete_menu = function (menu_list) {
        var menu_details = {};
        var menu_name = Object.keys(menu_list);
        for (var _i = 0, menu_name_1 = menu_name; _i < menu_name_1.length; _i++) {
            var name_1 = menu_name_1[_i];
            if (name_1 === this.name) {
                menu_details[this.name] = this.items;
                return menu_details;
            }
        }
    };
    //get the bill of ordered Items
    Menu.prototype.calculate_bill = function (purchased_items, menu_list) {
        var _this = this;
        var values;
        var bill = 0;
        if (menu_list) {
            var value_menu_list = Object.keys(menu_list).map(function (key) { return menu_list[key]; });
            var _loop_1 = function (details) {
                var _loop_3 = function (element) {
                    values = +(Object.keys(details).filter(function (key) { return key === element; }).map(function (key) { return details[key]; }));
                    bill += +(values);
                };
                for (var _i = 0, purchased_items_2 = purchased_items; _i < purchased_items_2.length; _i++) {
                    var element = purchased_items_2[_i];
                    _loop_3(element);
                }
            };
            for (var _i = 0, value_menu_list_1 = value_menu_list; _i < value_menu_list_1.length; _i++) {
                var details = value_menu_list_1[_i];
                _loop_1(details);
            }
            return bill;
        }
        else {
            var _loop_2 = function (element) {
                values = +(Object.keys(this_1.items).filter(function (key) { return key === element; }).map(function (key) { return _this.items[key]; }));
                bill += +(values);
            };
            var this_1 = this;
            for (var _a = 0, purchased_items_1 = purchased_items; _a < purchased_items_1.length; _a++) {
                var element = purchased_items_1[_a];
                _loop_2(element);
            }
        }
        return bill;
    };
    return Menu;
}());
exports.Menu = Menu;
var menu_list = { brunch: menu_mock_1.brunch, early_bird: menu_mock_1.early_bird, kids: menu_mock_1.kids, dinner: menu_mock_1.dinner, arepa: menu_mock_1.arepa };
exports.brunch_menu = new Menu("brunch", menu_mock_1.brunch, '11', '16');
exports.brunch_menu.timing();
var brunch_bill = exports.brunch_menu.calculate_bill(['pancakes', 'waffles', 'burger', 'abc']);
console.log('Your Total Bill :' + brunch_bill);
var completeBrunchMenu = exports.brunch_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeBrunchMenu);
var brunch_another_bill = exports.brunch_menu.calculate_bill(['pancakes', 'waffles', 'burger', 'abc'], completeBrunchMenu); //passing Optional argument
console.log('Your new Bill :-' + brunch_another_bill);
exports.early_bird_menu = new Menu("early_bird", menu_mock_1.early_bird, '15', '18');
exports.early_bird_menu.timing();
var early_bird_bill = exports.early_bird_menu.calculate_bill(['salumeria plate', 'salad and breadsticks (serves 2, norefills)',
    'pizza with quattro formaggi']);
console.log('Your Total Bill :' + early_bird_bill);
var completeEarlyBirdsMenu = exports.early_bird_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeEarlyBirdsMenu);
var earlyBird_another_bill = exports.early_bird_menu.calculate_bill(['salad and breadsticks (serves 2, norefills)'], completeEarlyBirdsMenu); //passing Optional argument
console.log('Your new Bill : ' + earlyBird_another_bill);
exports.dinner_menu = new Menu("dinner", menu_mock_1.dinner, '17', '23');
exports.dinner_menu.timing();
var dinner_bill = exports.dinner_menu.calculate_bill(['crostini with eggplant caponata', 'ceaser salad', 'pizza with quattro formaggi']);
console.log('Your Total Bill :' + dinner_bill);
var completeDinnerMenu = exports.dinner_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeDinnerMenu);
var dinner_another_bill = exports.dinner_menu.calculate_bill(['ceaser salad', 'pizza with quattro formaggi'], completeDinnerMenu); //passing Optional argument
console.log('Your new Bill : ' + dinner_another_bill);
exports.kids_menu = new Menu("kids", menu_mock_1.kids, '11', '21');
exports.kids_menu.timing();
var kids_bill = exports.kids_menu.calculate_bill(['chicken nuggets', 'fusilli with wild mushrooms']);
console.log('Your Total Bill :' + kids_bill);
var completeKidsMenu = exports.kids_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeKidsMenu);
var kids_another_bill = exports.kids_menu.calculate_bill(['chicken nuggets'], completeKidsMenu); //passing Optional argument
console.log('Your new Bill : ' + kids_another_bill);
exports.arepa_menu = new Menu("arepa", menu_mock_1.arepa, '10', '20');
exports.arepa_menu.timing();
var arepa_bill = exports.arepa_menu.calculate_bill(['arepa pabellon', 'pernil arepa', 'guayanes arepa']);
console.log('Your Total Bill :' + arepa_bill);
var completeArepaMenu = exports.arepa_menu.complete_menu(menu_list);
console.log('Complete Menu detail');
console.log(completeArepaMenu);
var arepa_another_bill = exports.arepa_menu.calculate_bill(['pernil arepa'], completeArepaMenu); //passing Optional argument
console.log('Your new Bill : ' + arepa_another_bill);
