import { Component, Input } from '@angular/core';
import { IProfile } from '../../data/services/types';
import { ImgUrlPipe } from '../../helpers/pipe/img-url.pipe';

@Component({
  selector: 'app-follower',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './follower.component.html',
  styleUrl: './follower.component.scss',
})
export class FollowerComponent {
  @Input() follower?: IProfile;
}
