import {Component, Input} from '@angular/core';

import {Achievement} from "../../../textsPage/classes/achievement";

@Component({
  selector: 'achievements-component',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  @Input() category: string;
  @Input() achievements: Achievement[];
}
