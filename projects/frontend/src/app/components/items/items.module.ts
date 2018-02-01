import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoxComponent} from './boxes/box/box.component';
import {ImageBoxComponent} from './boxes/imageBox/imageBox.component';
import {TextBoxComponent} from './boxes/textBox/textBox.component';

import {GridColumnComponent} from '../items/grid/gridColumn/gridColumn.component';
import {GridRowComponent} from '../items/grid/gridRow/gridRow.component';

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
