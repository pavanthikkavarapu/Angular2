import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyService{

    constructor(private __http:Http){

    }

    getEmpData(){
        return this.__http.get("http://localhost:8080/mysql")
        .map((res:Response)=>res.json());
    }

    getProductData(){
        return this.__http.get("https://conduit.productionready.io/api/profiles/eric")
        .map((res:Response)=>res.json());
    }
}