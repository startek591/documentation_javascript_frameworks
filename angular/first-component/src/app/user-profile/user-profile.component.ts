import { Component, signal, computed } from '@angular/core';
import { ProfilePhoto } from '../profile-photo/profile-photo.component';
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrl: 'user-profile.component.css',
  imports: [ProfilePhoto],
})
export class UserProfile {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  activateTrial() {
    this.isTrial.set(true);
  }
}
