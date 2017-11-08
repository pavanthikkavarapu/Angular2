import { Component } from '@angular/core';

import { UserService } from './UserService';

@Component({
  selector: 'home-page',
  template: `
  <div>
    <button (click)="loadUser()">Load profile</button>
    {{ profile | json }}
  </div>
  `,
  providers:[UserService]
})
export class HomeComponent {
  constructor(private userService: UserService) {}
  profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }
}