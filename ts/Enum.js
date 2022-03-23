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
var sum = function (x, y) { return x + y; };
console.log(sum(10, 20));