import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AboutMePage} from '../../model/pages/about-me-page.interface';
import {AboutMeEvent} from '../../model/about-me-event.interface';
import {Achievement} from '../../model/achievement.interface';
import {
  getAchievements_Awards,
  getAchievements_FurtherDevelopments,
  getAchievements_InTheMedia,
  getEvents
} from '../../store/about-me/about-me.selectors';
import {getAboutMePage} from '../../store/page/page.selectors';

@Component({
  selector: 'anselm-about-me-page',
  templateUrl: './about-me-page.component.html'
})
export class AboutMePageComponent implements OnInit {

  aboutMePage: Observable<AboutMePage>;
  events: Observable<AboutMeEvent[]>;
  furtherDevelopments: Observable<Achievement[]>;
  awards: Observable<Achievement[]>;
  inTheMedia: Observable<Achievement[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.aboutMePage = this.store.select(getAboutMePage);
    this.events = this.store.select(getEvents);
    this.furtherDevelopments = this.store.select(getAchievements_FurtherDevelopments);
    this.awards = this.store.select(getAchievements_Awards);
    this.inTheMedia = this.store.select(getAchievements_InTheMedia);
  }
}
