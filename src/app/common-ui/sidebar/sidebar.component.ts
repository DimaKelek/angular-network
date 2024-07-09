import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';
import { FollowerComponent } from '../follower/follower.component';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent, NgForOf, FollowerComponent, AsyncPipe, JsonPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  followers$ = this.profileService.getFollowers(3);

  menuItems = [
    { id: 1, name: 'Home', iconPath: 'home', link: '' },
    { id: 2, name: 'Chats', iconPath: 'chats', link: '' },
    { id: 3, name: 'Search', iconPath: 'search', link: '' },
  ];
}
