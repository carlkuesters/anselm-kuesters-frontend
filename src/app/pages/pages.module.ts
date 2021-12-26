import {NgModule} from '@angular/core';

import {AboutMePageModule} from './about-me-page/about-me-page.module';
import {ContactPageModule} from './contact-page/contact-page.module';
import {ContentPageModule} from './content-page/content-page.module';
import {HomePageModule} from './home-page/home-page.module';
import {InfoPageModule} from './info-page/info-page.module';
import {TextPageModule} from './text-page/text-page.module';
import {TextScrapingPageModule} from './text-scraping-page/text-scraping-page.module';

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
