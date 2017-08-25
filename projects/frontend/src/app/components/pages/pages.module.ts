import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '../layout/layout.module';
import { ItemsModule } from '../items/items.module';

import { HomePageComponent } from './homePage/homePage.component';
import { TextsPageComponent } from './textsPage/textsPage.component';
import { AboutMePageComponent } from './aboutMePage/aboutMePage.component';
import { ContactPageComponent } from './contactPage/contactPage.component';
import { InfoPageComponent } from './infoPage/infoPage.component';

@NgModule({
  imports: [
    RouterModule,

    LayoutModule,
    ItemsModule
  ],
  declarations: [
    HomePageComponent,
    TextsPageComponent,
    AboutMePageComponent,
    ContactPageComponent,
    InfoPageComponent,
  ],
  exports: [
    HomePageComponent,
    TextsPageComponent,
    AboutMePageComponent,
    ContactPageComponent,
    InfoPageComponent,
  ]
})
export class PagesModule { }
