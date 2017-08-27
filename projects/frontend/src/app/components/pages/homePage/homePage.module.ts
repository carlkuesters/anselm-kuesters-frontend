import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItemsModule } from '../../items/items.module';

import { HomePageComponent } from './homePage.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NewestTextsComponent } from './components/newestTexts/newestTexts.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  imports: [
    RouterModule,
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
