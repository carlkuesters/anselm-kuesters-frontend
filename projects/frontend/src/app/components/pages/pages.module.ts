import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {LayoutModule} from '../layout/layout.module';
import {ItemsModule} from '../items/items.module';

import {HomePageModule} from './homePage/homePage.module';
import {TextsPageModule} from './textsPage/textsPage.module';
import {TextPageModule} from './textPage/textPage.module';
import {AboutMePageModule} from './aboutMePage/aboutMePage.module';
import {ContactPageComponent} from './contactPage/contactPage.component';
import {InfoPageComponent} from './infoPage/infoPage.component';

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
  ],
  declarations: [
    ContactPageComponent,
    InfoPageComponent,
  ],
  exports: [
    ContactPageComponent,
    InfoPageComponent,
  ]
})
export class PagesModule { }
