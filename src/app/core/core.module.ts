import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {SharedModule} from '../shared/shared.module';
import {AboutMeEffects} from '../store/about-me/about-me.effects';
import {aboutMeReducer} from '../store/about-me/about-me.reducers';
import {ContentEffects} from '../store/content/content.effects';
import {contentReducer} from '../store/content/content.reducers';
import {QuoteEffects} from '../store/quote/quote.effects';
import {quoteReducer} from '../store/quote/quote.reducers';
import {TextEffects} from '../store/text/text.effects';
import {textReducer} from '../store/text/text.reducers';
import {TextScrapingEffects} from '../store/text-scraping/text-scraping.effects';
import {textScrapingReducer} from '../store/text-scraping/text-scraping.reducers';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PageWrapperComponent} from './components/pageWrapper/pageWrapper.component';
import {AboutMeHttpService} from './services/about-me-http/about-me-http.service';
import {QuoteHttpService} from './services/quote-http/quote-http.service';
import {TextHttpService} from './services/text-http/text-http.service';
import {LinkHttpService} from './services/link-http/link-http.service';
import {TextScrapingHttpService} from './services/text-scraping-http/text-scraping-http.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/translations/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,

    StoreModule.forRoot({}),
    StoreModule.forFeature('aboutMe', aboutMeReducer),
    StoreModule.forFeature('content', contentReducer),
    StoreModule.forFeature('quote', quoteReducer),
    StoreModule.forFeature('text', textReducer),
    StoreModule.forFeature('textScraping', textScrapingReducer),
    EffectsModule.forRoot([ AboutMeEffects, QuoteEffects, TextEffects, ContentEffects, TextScrapingEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),

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
    AboutMeHttpService,
    LinkHttpService,
    QuoteHttpService,
    TextHttpService,
    TextScrapingHttpService,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageWrapperComponent,
  ]
})
export class CoreModule { }
