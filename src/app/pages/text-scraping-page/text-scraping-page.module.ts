import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {TextScrapingPageComponent} from './text-scraping-page.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TextScrapingPageComponent,
  ],
  exports: [
    TextScrapingPageComponent,
  ]
})
export class TextScrapingPageModule { }
