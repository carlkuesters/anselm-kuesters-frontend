import {NgModule} from '@angular/core';

import {AboutMePageModule} from './aboutMePage/aboutMePage.module';
import {ContactPageModule} from './contactPage/contactPage.module';
import {ContentPageModule} from './content-page/content-page.module';
import {HomePageModule} from './homePage/homePage.module';
import {InfoPageModule} from './infoPage/infoPage.module';
import {TextPageModule} from './textPage/textPage.module';
import {TextScrapingPageModule} from './textScrapingPage/text-scraping-page.module';

@NgModule({
  imports: [
    AboutMePageModule,
    ContactPageModule,
    ContentPageModule,
    HomePageModule,
    InfoPageModule,
    TextPageModule,
    TextScrapingPageModule,
  ],
})
export class PagesModule { }
