import {NgModule} from '@angular/core';

import {HomePageModule} from './homePage/homePage.module';
import {TextsPageModule} from './textsPage/textsPage.module';
import {TextPageModule} from './textPage/textPage.module';
import {AboutMePageModule} from './aboutMePage/aboutMePage.module';
import {ContactPageModule} from './contactPage/contactPage.module';
import {InfoPageModule} from './infoPage/infoPage.module';
import {TextScrapingPageModule} from './textScrapingPage/text-scraping-page.module';

@NgModule({
  imports: [
    AboutMePageModule,
    ContactPageModule,
    HomePageModule,
    InfoPageModule,
    TextPageModule,
    TextsPageModule,
    TextScrapingPageModule,
  ],
})
export class PagesModule { }
