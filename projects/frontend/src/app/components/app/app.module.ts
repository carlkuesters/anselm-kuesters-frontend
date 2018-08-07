import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from '../layout/layout.module';
import {ItemsModule} from '../items/items.module';
import {PagesModule} from '../pages/pages.module';

import {AchievementsService} from '../../services/achievements.service';
import {BackendInformationService} from '../../services/backendInformation.service';
import {TextsService} from '../../services/texts.service';
import {QuotesService} from '../../services/quotes.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    AppRoutingModule,
    LayoutModule,
    ItemsModule,
    PagesModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AchievementsService,
    BackendInformationService,
    TextsService,
    QuotesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
