import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }  from '@angular/forms';
import {TestComponent} from './test.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent,TestComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
