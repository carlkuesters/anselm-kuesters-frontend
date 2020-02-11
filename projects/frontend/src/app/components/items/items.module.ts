import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoxComponent} from './boxes/box/box.component';
import {ImageBoxComponent} from './boxes/imageBox/imageBox.component';
import {TextBoxComponent} from './boxes/textBox/textBox.component';
import {GridColumnComponent} from './grid/gridColumn/gridColumn.component';
import {GridRowComponent} from './grid/gridRow/gridRow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoxComponent,
    ImageBoxComponent,
    TextBoxComponent,

    GridColumnComponent,
    GridRowComponent,
  ],
  exports: [
    BoxComponent,
    ImageBoxComponent,
    TextBoxComponent,

    GridColumnComponent,
    GridRowComponent,
  ]
})
export class ItemsModule { }
