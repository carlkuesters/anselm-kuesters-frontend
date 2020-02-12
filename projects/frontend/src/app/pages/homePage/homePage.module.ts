import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {HomePageComponent} from './homePage.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {NewestTextsComponent} from './components/newestTexts/newestTexts.component';
import {QuoteComponent} from './components/quote/quote.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomePageComponent,
    WelcomeComponent,
    NewestTextsComponent,
    QuoteComponent,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomePageModule { }
