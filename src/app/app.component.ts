import {Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as AboutMeActions from './store/about-me/about-me.actions';
import * as ContentActions from './store/content/content.actions';
import * as QuoteActions from './store/quote/quote.actions';
import * as PageActions from './store/page/page.actions';
import {isAppInitialized} from './store/combined.selectors';

@Component({
  selector: 'anselm-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  isAppInitialized: Observable<boolean>;

  constructor(private translateService: TranslateService, private store: Store) {
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');

    this.isAppInitialized = this.store.select(isAppInitialized);

    this.store.dispatch(AboutMeActions.loadEvents());
    this.store.dispatch(AboutMeActions.loadAchievements());
    this.store.dispatch(PageActions.loadPages());
    this.store.dispatch(QuoteActions.loadQuotes());
    this.store.dispatch(ContentActions.loadContent());
  }
}
