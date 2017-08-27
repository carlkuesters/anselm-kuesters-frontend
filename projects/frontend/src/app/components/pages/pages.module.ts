import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { LayoutModule } from '../layout/layout.module';
import { ItemsModule } from '../items/items.module';

import { HomePageModule } from './homePage/homePage.module';
import { TextsPageComponent } from './textsPage/textsPage.component';
import { AboutMePageModule } from './aboutMePage/aboutMePage.module';
import { ContactPageComponent } from './contactPage/contactPage.component';
import { InfoPageComponent } from './infoPage/infoPage.component';

@NgModule({
  imports: [
    RouterModule,

    TranslateModule,

    LayoutModule,
    ItemsModule,

    HomePageModule,
    AboutMePageModule,
  ],
  declarations: [
    TextsPageComponent,
    ContactPageComponent,
    InfoPageComponent,
  ],
  exports: [
    TextsPageComponent,
    ContactPageComponent,
    InfoPageComponent,
  ]
})
export class PagesModule { }
