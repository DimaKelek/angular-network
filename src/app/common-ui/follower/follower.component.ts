import { Component, Input } from '@angular/core';
import { IProfile } from '../../data/services/types';
import { ImgUrlPipe } from '../../helpers/pipe/img-url.pipe';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-follower',
  standalone: true,
  imports: [ImgUrlPipe, SvgIconComponent, NgOptimizedImage],
  templateUrl: './follower.component.html',
  styleUrl: './follower.component.scss',
})
export class FollowerComponent {
  @Input() follower?: IProfile;
}
