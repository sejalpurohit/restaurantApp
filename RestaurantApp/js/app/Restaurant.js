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
    //get the timing of eachh meal
    Menu.prototype.timing = function () {
        console.log(this.name + " available from  " + this.start_time + "am to " + this.end_time + "pm. ");
    };
    Menu.prototype.calculate_bill = function (item) {
        var _this = this;
        var values;
        var bill = 0;
        var _loop_1 = function (element) {
            values = +(Object.keys(this_1.items).filter(function (key) { return key === element; }).map(function (key) { return _this.items[key]; }));
            bill += +(values);
        };
        var this_1 = this;
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var element = item_1[_i];
            _loop_1(element);
        }
        return bill;
    };
    return Menu;
}());
exports.Menu = Menu;
exports.brunch_menu = new Menu("brunch", menu_mock_1.brunch, '11', '12');
var brunch_bill = exports.brunch_menu.calculate_bill(['pancakes', 'waffles', 'burger', 'abc']);
console.log('Your Total Bill :' + brunch_bill);
exports.early_bird_menu = new Menu("early_bird", menu_mock_1.early_bird, '15', '18');
var early_bird_bill = exports.early_bird_menu.calculate_bill(['salumeria plate', 'salad and breadsticks (serves 2, norefills)',
    'pizza with quattro formaggi']);
console.log('Your Total Bill :' + early_bird_bill);
exports.dinner_menu = new Menu("dinner", menu_mock_1.dinner, '15', '23');
var dinner_bill = exports.dinner_menu.calculate_bill(['crostini with eggplant caponata', 'ceaser salad', 'pizza with quattro formaggi']);
console.log('Your Total Bill :' + dinner_bill);
exports.kids_menu = new Menu("kids", menu_mock_1.kids, '11', '21');
var kids_bill = exports.kids_menu.calculate_bill(['chicken nuggets', 'fusilli with wild mushrooms']);
console.log('Your Total Bill :' + kids_bill);
exports.arepa_menu = new Menu("arepa", menu_mock_1.arepa, '11', '20');
var arepa_bill = exports.arepa_menu.calculate_bill(['arepa pabellon', 'pernil arepa', 'guayanes arepa']);
console.log('Your Total Bill :' + arepa_bill);
