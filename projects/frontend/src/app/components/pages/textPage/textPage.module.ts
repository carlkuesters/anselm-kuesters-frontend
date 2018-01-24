import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { ItemsModule } from '../../items/items.module';

import { TextPageComponent } from './textPage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    TextPageComponent,
  ],
  exports: [
    TextPageComponent,
  ]
})
export class TextPageModule { }
