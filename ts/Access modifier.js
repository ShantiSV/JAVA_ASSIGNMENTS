var Device = /** @class */ (function () {
    function Device(device_name, device_id) {
        this.device_type = 'Laptop';
        this.device_name = device_name;
        this.device_id = device_id;
    }
    return Device;
}());
var obj_x = new Device("ROG GL503 VD", 400703);
// console.log(obj_x.device_type+" "+obj_x.device_name+" "+obj_x.device_id);
console.log(obj_x.device_id);
var days;
(function (days) {
    days[days["Sun"] = 0] = "Sun";
    days[days["Mon"] = 1] = "Mon";
    days[days["Tue"] = 2] = "Tue";
    days[days["Wed"] = 3] = "Wed";
    days[days["Thu"] = 4] = "Thu";
    days[days["Fri"] = 5] = "Fri";
    days[days["Sat"] = 6] = "Sat";
    days[days["day"] = 7] = "day";
})(days || (days = {}));
var today;
today = days.day;
console.log(today);