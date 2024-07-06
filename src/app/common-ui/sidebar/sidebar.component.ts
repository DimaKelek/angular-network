import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    { id: 1, name: 'Home', iconPath: '/assets/Icons/home.svg' },
    { id: 2, name: 'Chats', iconPath: '/assets/Icons/chat.svg' },
    { id: 3, name: 'Search', iconPath: '/assets/Icons/search.svg' },
  ];
}
