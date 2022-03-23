"use strict";
exports.__esModule = true;
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    // constructor(name:string,description:string,url:string,size:number,forkCount:number){
    //     this.name = name;
    //     this.description = description;
    //     this.url = url;
    //     this.size = size;
    //     this.forkCount = forkCount;
    // }
    function Repo(repoResponse) {
        this.name = repoResponse.name;
        this.description = repoResponse.description;
        this.url = repoResponse.html_url;
        this.size = repoResponse.size;
        this.forkCount = repoResponse.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;