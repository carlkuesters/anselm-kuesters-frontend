import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {BoxComponent} from './components/box/box.component';
import {ImageBoxComponent} from './components/imageBox/imageBox.component';
import {TextBoxComponent} from './components/textBox/textBox.component';
import {GridColumnComponent} from './components/gridColumn/gridColumn.component';
import {GridRowComponent} from './components/gridRow/gridRow.component';
import {ReactiveFormsModule} from '@angular/forms';

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
