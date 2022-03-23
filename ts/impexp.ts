import * as _ from 'lodash';
export class person {
    private  name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    join() {
        return this.name + this.age;
    }  
    justprint(str: string) {
        console.log(str);
    }
};