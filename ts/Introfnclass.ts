var cars: String[];
cars = ["Saab", "Volvo", "BMW"];
// --------------------------------------------------

const colours: String[] = ["Red", "Green", "Blue"];
colours.push("Black");
colours.push("White");
colours.push("Yellow");
console.log(colours);
colours.pop();
console.log(colours);
// --------------------------------------------------

var Tup: [number, string];
Tup = [1, "Hello"];
Tup.push(2, "World");
console.log(Tup);
// --------------------------------------------------

function sub(a:number,b:number){
    return a-b;
}
console.log(sub(10,5));
// --------------------------------------------------

function mul(a:number,b:number,c ?:number):number{
    return a*b;
}
console.log(mul(10,5,2));
// --------------------------------------------------

function add(a:number,b:number,c=26):number{
    return a+b+c;
}
console.log(add(10,5));
// --------------------------------------------------

var multi: any;
multi = [1,2,3];
multi = "Hello";
multi = true;
console.log(multi);
// --------------------------------------------------

var multivar: boolean | string;
multivar = true;
multivar = "Hello";
// multivar = 2;
console.log(multivar);
// --------------------------------------------------

class People{
    name:any;
    xstring:any;
    udf :undefined;
};

var obj = new People();
obj.name = "John";
obj.xstring = "Hello";
console.log(obj.xstring+" "+obj.name);
// --------------------------------------------------

class Car{
    type: string;
    Manufacturer: string;
    name:string;

    constructor(type:string, manufacturer:string,name:string){
        this.type = type
        this.Manufacturer = manufacturer;
        this.name = name;
    }
    print(){
        console.log(this.type+":"+this.Manufacturer+" "+this.name);
    }

}
var car = new Car("sedan","BMW","X5");
car.print();var cars: String[];
cars = ["Saab", "Volvo", "BMW"];
// --------------------------------------------------

const colours: String[] = ["Red", "Green", "Blue"];
colours.push("Black");
colours.push("White");
colours.push("Yellow");
console.log(colours);
colours.pop();
console.log(colours);
// --------------------------------------------------

var Tup: [number, string];
Tup = [1, "Hello"];
Tup.push(2, "World");
console.log(Tup);
// --------------------------------------------------

function sub(a:number,b:number){
    return a-b;
}
console.log(sub(10,5));
// --------------------------------------------------

function mul(a:number,b:number,c ?:number):number{
    return a*b;
}
console.log(mul(10,5,2));
// --------------------------------------------------

function add(a:number,b:number,c=26):number{
    return a+b+c;
}
console.log(add(10,5));
// --------------------------------------------------

var multi: any;
multi = [1,2,3];
multi = "Hello";
multi = true;
console.log(multi);
// --------------------------------------------------

var multivar: boolean | string;
multivar = true;
multivar = "Hello";
// multivar = 2;
console.log(multivar);
// --------------------------------------------------

class People{
    name:any;
    xstring:any;
    udf :undefined;
};

var obj = new People();
obj.name = "John";
obj.xstring = "Hello";
console.log(obj.xstring+" "+obj.name);
// --------------------------------------------------

class Car{
    type: string;
    Manufacturer: string;
    name:string;

    constructor(type:string, manufacturer:string,name:string){
        this.type = type
        this.Manufacturer = manufacturer;
        this.name = name;
    }
    print(){
        console.log(this.type+":"+this.Manufacturer+" "+this.name);
    }

}
var car = new Car("sedan","BMW","X5");
car.print();