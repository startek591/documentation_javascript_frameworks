import { Component } from '@angular/core';

@Component({
  selector: 'profile-photo',
  standalone: true,
  template: `<img src="profile-photo.jpg" alt="Your profile photo" />`,
  styles: `img { border-radius: 50%; }`,
})
export class ProfilePhoto {}
