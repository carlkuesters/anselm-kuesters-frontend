import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {ItemsModule} from '../../items/items.module';

import {HomePageComponent} from './homePage.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {NewestTextsComponent} from './components/newestTexts/newestTexts.component';
import {QuoteComponent} from './components/quote/quote.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    HomePageComponent,
    WelcomeComponent,
    NewestTextsComponent,
    QuoteComponent,
  ],
  exports: [
    HomePageComponent,
    WelcomeComponent,
    NewestTextsComponent,
    QuoteComponent,
  ]
})
export class HomePageModule { }
