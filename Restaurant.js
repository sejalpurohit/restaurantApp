"use strict";
exports.__esModule = true;
var Objects_1 = require("./Objects");
var Menu = /** @class */ (function () {
    function Menu(name, items, start_time, end_time) {
        this.name = name;
        this.items = items;
        this.start_time = start_time;
        this.end_time = end_time;
    }
    //get the timing of eachh meal
    Menu.prototype.timings = function () {
        switch (this.name.toLowerCase()) {
            case "brunch": {
                console.log('Brunch menu available from ' + this.start_time + 'am to ' + this.end_time + 'pm');
                break;
            }
            case "early_bird": {
                console.log('Early_birds menu available from ' + this.start_time + 'am to ' + this.end_time + 'pm');
                break;
            }
            case "dinner": {
                console.log('Dinner menu available from ' + this.start_time + 'am to ' + this.end_time + 'pm');
                break;
            }
            case "kids": {
                console.log('Kids menu available from ' + this.start_time + 'am to ' + this.end_time + 'pm');
                break;
            }
            default: {
                console.log('Not Available');
                break;
            }
        }
    };
    Menu.prototype.calculate_bill = function (item) {
        var _this = this;
        var values;
        var bill = 0;
        var _loop_1 = function (element) {
            values = Object.keys(this_1.items).filter(function (key) { return key === element; }).map(function (key) { return _this.items[key]; });
            console.log(element);
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
var m1 = new Menu("brunch", Objects_1.brunch, '11', '12');
//m1.timings();
var bill = m1.calculate_bill(['pancakes', 'waffles', 'burger']);
console.log('Your Total Bill :' + bill);
console.log(Objects_1.dinner);
