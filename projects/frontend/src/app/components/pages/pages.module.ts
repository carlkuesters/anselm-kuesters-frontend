import { NgModule } from '@angular/core';

import { ItemsModule } from '../items/items.module';

import { HomePageComponent } from './homePage/homePage.component';

@NgModule({
  imports: [
    ItemsModule
  ],
  declarations: [
    HomePageComponent,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class PagesModule { }
