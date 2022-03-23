interface Vehicle{
    manufacturer: string;
    name:string;
    getFullName():string;
    

}

class Truck implements Vehicle{
    manufacturer: string;
    name:string;
    getFullName(): any {
       console.log(this.manufacturer+" "+this.name);
    }
    constructor(manufacturer:string,name:string){
        this.manufacturer = manufacturer;
        this.name = name;
    }
    
}
let lcv:Vehicle = new Truck("BMW","X5");

let obj_veh={manufacturer:"Ford",name:"Fiesta",getFullName:()=>{return "Ford Fiesta"}};
lcv.getFullName();