import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {AboutMeEvent} from '../../model/aboutMeEvent';
import {Achievement} from '../../model/achievement';
import {AboutMeStoreFacadeService} from '../../core/services/about-me-store-facade/about-me-store-facade.service';

@Component({
  selector: 'anselm-about-me-page',
  templateUrl: './aboutMePage.component.html',
  styleUrls: ['./aboutMePage.component.scss']
})
export class AboutMePageComponent implements OnInit {
  events: Observable<AboutMeEvent[]>;
  furtherDevelopments: Observable<Achievement[]>;
  awards: Observable<Achievement[]>;
  inTheMedia: Observable<Achievement[]>;

  constructor(private aboutMeStoreFacadeService: AboutMeStoreFacadeService) {
  }

  ngOnInit(): void {
    this.events = this.aboutMeStoreFacadeService.getEvents();
    this.furtherDevelopments = this.aboutMeStoreFacadeService.getAchievements_FurtherDevelopments();
    this.awards = this.aboutMeStoreFacadeService.getAchievements_Awards();
    this.inTheMedia = this.aboutMeStoreFacadeService.getAchievements_InTheMedia();

    this.aboutMeStoreFacadeService.loadEvents();
    this.aboutMeStoreFacadeService.loadAchievements();
  }
}
