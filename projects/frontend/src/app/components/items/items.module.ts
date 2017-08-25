import { NgModule } from '@angular/core';

import { BoxComponent } from './box/box.component';
import { GridColumnComponent } from '../items/grid/gridColumn/gridColumn.component';
import { GridRowComponent } from '../items/grid/gridRow/gridRow.component';

@NgModule({
  imports: [],
  declarations: [
    BoxComponent,
    GridColumnComponent,
    GridRowComponent,
  ],
  exports: [
    BoxComponent,
    GridColumnComponent,
    GridRowComponent,
  ]
})
export class ItemsModule { }
