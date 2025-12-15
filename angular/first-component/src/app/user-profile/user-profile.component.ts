import { Component, signal, computed, OnInit } from '@angular/core';
import { ProfilePhoto } from '../profile-photo/profile-photo.component';

interface Badge {
  id: number;
  name: string;
}

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
  userName = signal('pro_programmer_123');
  userRole: 'admin' | 'user' = 'admin';

  isValidUserId = signal(false);

  badges = signal<Badge[]>([
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Contributor' },
  ]);

  ngOnInt() {
    this.userName.set('cool_coder_789');
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  activateTrial() {
    this.isTrial.set(true);
  }

  cancelSubscription(event: Event) {}
}
