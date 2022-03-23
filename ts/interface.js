var Truck = /** @class */ (function () {
    function Truck(manufacturer, name) {
        this.manufacturer = manufacturer;
        this.name = name;
    }
    Truck.prototype.getFullName = function () {
        console.log(this.manufacturer + " " + this.name);
    };
    return Truck;
}());
var lcv = new Truck("BMW", "X5");
var obj_veh = { manufacturer: "Ford", name: "Fiesta", getFullName: function () { return "Ford Fiesta"; } };
lcv.getFullName();