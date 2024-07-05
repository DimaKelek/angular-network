import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IProfile } from '../../data/services/types';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile?: IProfile;
}
