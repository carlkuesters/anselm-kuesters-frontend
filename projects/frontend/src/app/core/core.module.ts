import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PageWrapperComponent} from './components/pageWrapper/pageWrapper.component';
import {AchievementsService} from './services/achievements.service';
import {BackendInformationService} from './services/backendInformation.service';
import {SeoService} from './services/seo.service';
import {TextsService} from './services/texts.service';
import {QuotesService} from './services/quotes.service';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/translations/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageWrapperComponent,
  ],
  providers: [
    AchievementsService,
    BackendInformationService,
    SeoService,
    TextsService,
    QuotesService,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageWrapperComponent,
  ]
})
export class CoreModule { }
