import {Component, OnInit} from '@angular/core';

import {AchievementsService} from '../../core/services/achievements.service';
import {Achievement} from './classes/achievement';

@Component({
  selector: 'anselm-about-me-page',
  templateUrl: './aboutMePage.component.html',
  styleUrls: ['./aboutMePage.component.scss']
})
export class AboutMePageComponent implements OnInit {
  furtherDevelopments: Promise<Achievement[]>;
  awards: Promise<Achievement[]>;
  inTheMedia: Promise<Achievement[]>;

  constructor(private achievementsService: AchievementsService) {
  }

  ngOnInit() {
    this.furtherDevelopments = this.achievementsService.getFurtherDevelopments();
    this.awards = this.achievementsService.getAwards();
    this.inTheMedia = this.achievementsService.getInTheMedia();
  }
}
