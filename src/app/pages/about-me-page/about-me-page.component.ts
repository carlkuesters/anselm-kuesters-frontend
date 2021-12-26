import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AboutMeEvent} from '../../model/about-me-event.interface';
import {Achievement} from '../../model/achievement.interface';
import * as AboutMeActions from '../../store/about-me/about-me.actions';
import {
  getAchievements_Awards,
  getAchievements_FurtherDevelopments,
  getAchievements_InTheMedia,
  getEvents
} from '../../store/about-me/about-me.selectors';

@Component({
  selector: 'anselm-about-me-page',
  templateUrl: './about-me-page.component.html'
})
export class AboutMePageComponent implements OnInit {
  events: Observable<AboutMeEvent[]>;
  furtherDevelopments: Observable<Achievement[]>;
  awards: Observable<Achievement[]>;
  inTheMedia: Observable<Achievement[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.events = this.store.select(getEvents);
    this.furtherDevelopments = this.store.select(getAchievements_FurtherDevelopments);
    this.awards = this.store.select(getAchievements_Awards);
    this.inTheMedia = this.store.select(getAchievements_InTheMedia);

    this.store.dispatch(AboutMeActions.loadEvents());
    this.store.dispatch(AboutMeActions.loadAchievements());
  }
}
