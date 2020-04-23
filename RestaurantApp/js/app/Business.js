"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Franchise_1 = require("./Franchise");
var Business = /** @class */ (function () {
    function Business(name, franchise) {
        this.name = name;
        this.franchise = franchise;
    }
    return Business;
}());
var franchise = [Franchise_1.flagship_store, Franchise_1.new_installment, Franchise_1.healthyBites];
var TastyDrips = new Business('TastyDrips', franchise);
console.log(TastyDrips);
