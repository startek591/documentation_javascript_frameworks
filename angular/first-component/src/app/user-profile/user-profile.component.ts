import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  standalone: true,
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; }`,
})
export class UserProfile {}
