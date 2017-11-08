import { Component } from '@angular/core';
import { MyService } from './app.service';

@Component({
  template: `
    <h2>{{var_one | json}}</h2>
    `,
    providers:[MyService]
})
export class CrisisListComponent { 
    var_one={};


    constructor(private __myService:MyService){
      __myService.getEmpData().subscribe(res=> this.var_one=res);
    }
}