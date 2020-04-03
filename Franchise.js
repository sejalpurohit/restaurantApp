"use strict";
exports.__esModule = true;
var Objects_1 = require("./Objects");
var Franchise = /** @class */ (function () {
    function Franchise(name, address, menuList) {
        this.name = name;
        this.address = address;
        this.menuList = menuList;
    }
    Franchise.prototype.stores = function () {
        return this.name + " is located at " + this.address;
    };
    Franchise.prototype.availability = function (time) {
        var nameofItem;
        var name;
        console.log('Available Menu ');
        var _loop_1 = function (elements) {
            var startTime = +Object.keys(elements).filter(function (key) { return key === 'start_time'; }).map(function (key) { return elements[key]; });
            var endTime = +Object.keys(elements).filter(function (key) { return key === 'end_time'; }).map(function (key) { return elements[key]; });
            if (time >= startTime && time <= endTime) {
                name = Object.keys(elements).filter(function (key) { return key === 'name'; }).map(function (key) { return elements[key]; }).toString();
                console.log(name);
            }
        };
        for (var _i = 0, menuList_1 = menuList; _i < menuList_1.length; _i++) {
            var elements = menuList_1[_i];
            _loop_1(elements);
        }
    };
    return Franchise;
}());
exports.Franchise = Franchise;
var menuList = [
    { name: 'brunch', item: Objects_1.brunch, start_time: 11, end_time: 16 },
    { name: 'early_birds', item: Objects_1.early_bird, start_time: 15, end_time: 18 },
    { name: 'dinner', item: Objects_1.dinner, start_time: 15, end_time: 23 },
    { name: 'kids', item: Objects_1.kids, start_time: 11, end_time: 21 },
    { name: 'arepa', item: Objects_1.arepa, start_time: 10, end_time: 20 }
];
exports.flagShip = new Franchise('flagship_store', '123 West Street Road', menuList);
console.log(exports.flagShip.stores());
exports.flagShip.availability(17);
exports.installment = new Franchise('new_installment', '456 East Street Road', menuList);
console.log(exports.installment.stores());
exports.installment.availability(21);
exports.healthyBites = new Franchise('HealthyBites', '789North Street Road', menuList);
console.log(exports.healthyBites.stores());
exports.healthyBites.availability(21);
