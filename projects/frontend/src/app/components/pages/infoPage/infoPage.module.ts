import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {ItemsModule} from '../../items/items.module';

import {InfoPageComponent} from './infoPage.component';

@NgModule({
  imports: [
    CommonModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    InfoPageComponent
  ],
  exports: [
    InfoPageComponent
  ]
})
export class InfoPageModule { }
