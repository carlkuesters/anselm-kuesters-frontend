import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';

import {PageHttpService} from '../../core/services/page-http/page-http.service';
import * as PageActions from './page.actions';

@Injectable()
export class PageEffects {

  constructor(
    private actions: Actions,
    private store: Store,
    private pageHttpService: PageHttpService,
  ) {}

  loadHomePage = createEffect(() => this.actions.pipe(
    ofType(PageActions.loadPages),
    switchMap(() => this.pageHttpService.getHomePage().pipe(
      map(responseHomePage => PageActions.homePageLoaded({ responseHomePage })),
      catchError(() => EMPTY)
    ))
  ));

  loadContentPage = createEffect(() => this.actions.pipe(
    ofType(PageActions.loadPages),
    switchMap(() => this.pageHttpService.getContentPage().pipe(
      map(responseContentPage => PageActions.contentPageLoaded({ responseContentPage })),
      catchError(() => EMPTY)
    ))
  ));

  loadAboutMePage = createEffect(() => this.actions.pipe(
    ofType(PageActions.loadPages),
    switchMap(() => this.pageHttpService.getAboutMePage().pipe(
      map(responseAboutMePage => PageActions.aboutMePageLoaded({ responseAboutMePage })),
      catchError(() => EMPTY)
    ))
  ));

  loadContactPage = createEffect(() => this.actions.pipe(
    ofType(PageActions.loadPages),
    switchMap(() => this.pageHttpService.getContactPage().pipe(
      map(responseContactPage => PageActions.contactPageLoaded({ responseContactPage })),
      catchError(() => EMPTY)
    ))
  ));

  loadInfoPage = createEffect(() => this.actions.pipe(
    ofType(PageActions.loadPages),
    switchMap(() => this.pageHttpService.getInfoPage().pipe(
      map(responseInfoPage => PageActions.infoPageLoaded({ responseInfoPage })),
      catchError(() => EMPTY)
    ))
  ));
}
