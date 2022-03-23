class Device{
    device_type='Laptop';
    private device_name:string;
    readonly device_id:number;

    constructor(device_name:string,device_id:number){
        this.device_name = device_name;
        this.device_id = device_id;
    }
}
var obj_x = new Device("ROG GL503 VD",400703);
// console.log(obj_x.device_type+" "+obj_x.device_name+" "+obj_x.device_id);
console.log(obj_x.device_id);
© 2022 GitHub, Inc.
Terms
Privacy
