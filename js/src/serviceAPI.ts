import * as request from 'request';
import { user } from './user';
import { Repo } from './repo';

//header
const options: any = {
    headers:{
    'User-Agent': 'request'
    },
    json:true
}

export class ServiceAPI{
    
    getUserInfo(userName:string,callback:(usr:user)=>any){
        
        //request user info
        request.get("https://api.github.com/users/"+userName,options,(error:any,response:any,body:any)=>{
            // console.log(response);
            // console.log(body);
            // console.log(error);
            let usr = new user(body);
            // let usr = new user(JSON.parse(body));
            // console.log(usr);
            callback(usr);
        });
    }

    getRepo(userName:string,callback:(repr:Repo[])=>any){
        // request repo info
        request.get("https://api.github.com/users/"+userName+"/repos",options,(error:any,response:any,body:any)=>{
            let rep = body.map((repo:any)=>new Repo(repo));
            callback(rep);
        });
    }
}