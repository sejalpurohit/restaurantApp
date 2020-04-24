"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./Menu");
var Franchise = /** @class */ (function () {
    function Franchise(address, menuList) {
        this.address = address;
        this.menuList = menuList;
    }
    Franchise.prototype.store_address = function () {
        return "is located at " + this.address;
    };
    Franchise.prototype.available_menus = function (time) {
        var nameofItem = [];
        var name;
        var _loop_1 = function (elements) {
            var startTime = +Object.keys(elements).filter(function (key) { return key === 'start_time'; }).map(function (key) { return elements[key]; });
            var endTime = +Object.keys(elements).filter(function (key) { return key === 'end_time'; }).map(function (key) { return elements[key]; });
            if (time >= startTime && time <= endTime) {
                name = Object.keys(elements).filter(function (key) { return key === 'name'; }).map(function (key) { return elements[key]; }).toString();
                nameofItem.push(name);
            }
        };
        for (var _i = 0, _a = this.menuList; _i < _a.length; _i++) {
            var elements = _a[_i];
            _loop_1(elements);
        }
        if (nameofItem.length !== 0) {
            return (nameofItem);
        }
        else {
            return ['No Menu Available at this Time :('];
        }
    };
    return Franchise;
}());
exports.Franchise = Franchise;
exports.menuList = [Menu_1.brunch_menu, Menu_1.early_bird_menu, Menu_1.dinner_menu, Menu_1.kids_menu];
exports.newMenuList = [Menu_1.arepa_menu];
exports.flagship_store = new Franchise('123 West Street Road', exports.menuList);
console.log('Flagship_store ' + exports.flagship_store.store_address());
console.log('Available Menu: ' + exports.flagship_store.available_menus(17));
exports.new_installment = new Franchise('456 East Street Road', exports.menuList);
console.log('New_installment ' + exports.new_installment.store_address());
console.log('Available Menu: ' + exports.new_installment.available_menus(21));
exports.healthyBites = new Franchise('789North Street Road', exports.newMenuList);
console.log('HealthyBites ' + exports.healthyBites.store_address());
console.log('Available Menu: ' + exports.healthyBites.available_menus(21));
