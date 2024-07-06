import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IProfile } from '../../data/services/types';
import { ImgUrlPipe } from '../../helpers/pipe/img-url.pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [NgOptimizedImage, ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile?: IProfile;
}
