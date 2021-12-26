import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {NewestTextsComponent} from './newest-texts/newest-texts.component';
import {QuoteComponent} from './quote/quote.component';
import {HomePageComponent} from './home-page.component';

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
