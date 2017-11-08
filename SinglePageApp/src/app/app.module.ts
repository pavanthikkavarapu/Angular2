import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent }          from './app.component';
import { CrisisListComponent }   from './page_one.component';
import { HeroListComponent }     from './page_two.component';
import { PageNotFoundComponent } from './not-found.component';
import { HttpModule } from '@angular/http';
 
const appRoutes: Routes = [
  { path: 'page_one', component: CrisisListComponent },
  { path: 'page_two', component: HeroListComponent },
 
  { path: '',   redirectTo: '/page_one', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

