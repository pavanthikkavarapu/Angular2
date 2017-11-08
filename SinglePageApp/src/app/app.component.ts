import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="/page_one" routerLinkActive="active">Page_One</a>&emsp;&emsp;&emsp;&emsp;
      <a routerLink="/page_two" routerLinkActive="active">Page_Two</a>
    </nav>
    <br><br>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
