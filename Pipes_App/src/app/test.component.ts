import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/interval';

@Component({
    selector : "my-app",
    templateUrl:"UI/test.html"
})
export class TestComponent{
    number=100;
    todayDate=new Date();
    var_one=0.99;
    var_two=9.1244;
    count=Observable.interval(2000);
    name='hello';
    name_one='HELLO';
    array=[10,20,30,40,50];

}