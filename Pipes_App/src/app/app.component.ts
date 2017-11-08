import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'my-app',
  templateUrl: 'UI/pipes.html'
})

export class AppComponent { 
 
  date:Date;
  name:string; 
  name1:string; 
  amount:number;  
  array:any[];
  grade:number;
  rating:number;
  promise:Promise<string>;
  countCompleted: boolean;
  countDown: number;
  count$: Observable<number>;
  message:string;
  count=Observable.interval(1000);

  constructor(){
    this.date = new Date();
    this.name="hello";
    this.name1="HELLO";
    this.amount=100;
    this.array=[{'id':1,'name':'Hello_1','age':20},
                {'id':2,'name':'Hello_2','age':22},
                {'id':3,'name':'Hello_3','age':24},
                {'id':4,'name':'Hello_4','age':26},
                {'id':5,'name':'Hello_5','age':28}
              ];
   this.grade=0.99;
   this.rating=9.1234;

    this.countDown = 5;
    this.message = "Happy birthday!"
    this.countCompleted = false;
    this.count$ = Observable
                    .interval(1000)
                    .map(i => this.countDown - i)
                    .takeWhile(i => i > 0)
                    .finally(() => this.countCompleted = true);

   
  }

}
