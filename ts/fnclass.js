var cars;
cars = ["Saab", "Volvo", "BMW"];
// --------------------------------------------------
var colours = ["Red", "Green", "Blue"];
colours.push("Black");
colours.push("White");
colours.push("Yellow");
console.log(colours);
colours.pop();
console.log(colours);
// --------------------------------------------------
var Tup;
Tup = [1, "Hello"];
Tup.push(2, "World");
console.log(Tup);
// --------------------------------------------------
function sub(a, b) {
    return a - b;
}
console.log(sub(10, 5));
// --------------------------------------------------
function mul(a, b, c) {
    return a * b;
}
console.log(mul(10, 5, 2));
// --------------------------------------------------
function add(a, b, c) {
    if (c === void 0) { c = 26; }
    return a + b + c;
}
console.log(add(10, 5));
// --------------------------------------------------
var multi;
multi = [1, 2, 3];
multi = "Hello";
multi = true;
console.log(multi);
// --------------------------------------------------
var multivar;
multivar = true;
multivar = "Hello";
// multivar = 2;
console.log(multivar);
// --------------------------------------------------
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
;
var obj = new People();
obj.name = "John";
obj.xstring = "Hello";
console.log(obj.xstring + " " + obj.name);
// --------------------------------------------------
var Car = /** @class */ (function () {
    function Car(type, manufacturer, name) {
        this.type = type;
        this.Manufacturer = manufacturer;
        this.name = name;
    }
    Car.prototype.print = function () {
        console.log(this.type + ":" + this.Manufacturer + " " + this.name);
    };
    return Car;
}());
var car = new Car("sedan", "BMW", "X5");
car.print();
// --------------------------------------------------
© 2022 GitHub, Inc.
Terms
Privacy
Security