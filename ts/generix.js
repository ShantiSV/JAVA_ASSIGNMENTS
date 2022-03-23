"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var impexp_1 = require("./impexp");
function echo(arg) {
    return arg;
}
var a = echo("Typescript");
var b = echo(34);
var Boi = /** @class */ (function (_super) {
    __extends(Boi, _super);
    function Boi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boi;
}(impexp_1.person));
var Gal = /** @class */ (function (_super) {
    __extends(Gal, _super);
    function Gal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Gal;
}(impexp_1.person));
var boi = new Boi("Boi", 34);
var gal = new Gal("Gal", 34);
console.log(boi.join());
gal.justprint("November111AlphaFoxtrot");
function Employee(arg) {
    return arg;
}
console.log(Employee(boi).join());