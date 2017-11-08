import { Component } from '@angular/core';
import { MyService } from './app.service'

@Component({
  template: `
    <h2 style="color:red">{{var_two | json}}</h2>
 
  `,
  providers:[MyService]
})
export class HeroListComponent { 

  var_two={};

  constructor(private __myService:MyService){
     __myService.getProductData().subscribe(res=>this.var_two=res);
  }

}