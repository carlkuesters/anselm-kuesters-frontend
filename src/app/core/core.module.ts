import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {SharedModule} from '../shared/shared.module';
import {AboutMeEffects} from '../store/effects/about-me.effects';
import {QuoteEffects} from '../store/effects/quote.effects';
import {TextEffects} from '../store/effects/text.effects';
import {TextEntriesEffects} from '../store/effects/text-entries.effects';
import {TextScrapingEffects} from '../store/effects/text-scraping.effects';
import {aboutMeReducer} from '../store/reducers/about-me.reducers';
import {quoteReducer} from '../store/reducers/quote.reducers';
import {textReducer} from '../store/reducers/text.reducers';
import {textEntriesReducer} from '../store/reducers/text-entries.reducers';
import {textScrapingReducer} from '../store/reducers/text-scraping.reducers';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PageWrapperComponent} from './components/pageWrapper/pageWrapper.component';
import {AboutMeHttpService} from './services/about-me-http/about-me-http.service';
import {AboutMeStoreFacadeService} from './services/about-me-store-facade/about-me-store-facade.service';
import {QuoteHttpService} from './services/quote-http/quote-http.service';
import {QuoteStoreFacadeService} from './services/quote-store-facade/quote-store-facade.service';
import {TextHttpService} from './services/text-http/text-http.service';
import {TextEntriesStoreFacadeService} from './services/text-entries-store-facade/text-entries-store-facade.service';
import {TextStoreFacadeService} from './services/text-store-facade/text-store-facade.service';
import {TextScrapingHttpService} from './services/text-scraping-http/text-scraping-http.service';
import {TextScrapingStoreFacadeService} from './services/text-scraping-store-facade/text-scraping-store-facade.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/translations/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,

    StoreModule.forRoot({}),
    StoreModule.forFeature('aboutMe', aboutMeReducer),
    StoreModule.forFeature('quote', quoteReducer),
    StoreModule.forFeature('text', textReducer),
    StoreModule.forFeature('textEntries', textEntriesReducer),
    StoreModule.forFeature('textScraping', textScrapingReducer),
    EffectsModule.forRoot([ AboutMeEffects, QuoteEffects, TextEffects, TextEntriesEffects, TextScrapingEffects ]),
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
    AboutMeStoreFacadeService,
    QuoteHttpService,
    QuoteStoreFacadeService,
    TextEntriesStoreFacadeService,
    TextHttpService,
    TextScrapingHttpService,
    TextScrapingStoreFacadeService,
    TextStoreFacadeService,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageWrapperComponent,
  ]
})
export class CoreModule { }
