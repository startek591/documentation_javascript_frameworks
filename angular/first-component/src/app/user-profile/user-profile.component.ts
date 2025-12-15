import { Component } from '@angular/core';
import { ProfilePhoto } from '../profile-photo/profile-photo.component';
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrl: 'user-profile.component.css',
  imports: [ProfilePhoto],
})
export class UserProfile {}
