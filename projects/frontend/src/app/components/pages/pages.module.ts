import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {LayoutModule} from '../layout/layout.module';
import {ItemsModule} from '../items/items.module';

import {HomePageModule} from './homePage/homePage.module';
import {TextsPageModule} from './textsPage/textsPage.module';
import {TextPageModule} from './textPage/textPage.module';
import {AboutMePageModule} from './aboutMePage/aboutMePage.module';
import {ContactPageModule} from './contactPage/contactPage.module';
import {InfoPageModule} from './infoPage/infoPage.module';

@NgModule({
  imports: [
    RouterModule,

    TranslateModule,

    LayoutModule,
    ItemsModule,

    HomePageModule,
    TextsPageModule,
      TextPageModule,
    AboutMePageModule,
    ContactPageModule,
    InfoPageModule,
  ],
  declarations: [],
  exports: []
})
export class PagesModule { }
