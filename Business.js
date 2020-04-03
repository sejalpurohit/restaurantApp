"use strict";
exports.__esModule = true;
var Franchise_1 = require("./Franchise");
var Business = /** @class */ (function () {
    function Business(name, franchise) {
        this.name = name;
        this.franchise = franchise;
    }
    Business.prototype.LocateFrnchise = function (name) {
        if (this.name === name) {
            return this.franchise;
        }
    };
    return Business;
}());
var franchise = [Franchise_1.flagShip, Franchise_1.installment, Franchise_1.healthyBites];
var TastyDrips = new Business('TastyDrips', franchise);
console.log(TastyDrips);
console.log(TastyDrips.LocateFrnchise('TastyDrips'));
