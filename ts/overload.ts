function join(a:string,b:string):String;
function join(a:number,b:number):number;
function join(a:any,b:any):any{
    return a+b;
}
console.log(join(10,20));
console.log(join("Hello","World"));