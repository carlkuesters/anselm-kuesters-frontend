import {Component, Input} from '@angular/core';

import {Achievement} from '../../classes/achievement';

@Component({
  selector: 'anselm-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  @Input() category: string;
  @Input() achievements: Achievement[];
}
