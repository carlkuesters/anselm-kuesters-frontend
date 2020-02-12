import {NgModule} from '@angular/core';

import {HomePageModule} from './homePage/homePage.module';
import {TextsPageModule} from './textsPage/textsPage.module';
import {TextPageModule} from './textPage/textPage.module';
import {AboutMePageModule} from './aboutMePage/aboutMePage.module';
import {ContactPageModule} from './contactPage/contactPage.module';
import {InfoPageModule} from './infoPage/infoPage.module';

@NgModule({
  imports: [
    AboutMePageModule,
    ContactPageModule,
    HomePageModule,
    InfoPageModule,
    TextPageModule,
    TextsPageModule,
  ],
})
export class PagesModule { }
