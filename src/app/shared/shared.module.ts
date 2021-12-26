import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {BoxComponent} from './components/box/box.component';
import {GridColumnComponent} from './components/grid-column/grid-column.component';
import {GridRowComponent} from './components/grid-row/grid-row.component';
import {ImageBoxComponent} from './components/image-box/image-box.component';
import {TextBoxComponent} from './components/text-box/text-box.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    TranslateModule
  ],
  declarations: [
    BoxComponent,
    GridColumnComponent,
    GridRowComponent,
    ImageBoxComponent,
    TextBoxComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,

    BoxComponent,
    GridColumnComponent,
    GridRowComponent,
    ImageBoxComponent,
    TextBoxComponent,
  ]
})
export class SharedModule { }
