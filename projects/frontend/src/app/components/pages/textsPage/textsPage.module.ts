import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { ItemsModule } from '../../items/items.module';

import { TextsPageComponent } from './textsPage.component';
import { TextsComponent } from './components/texts/texts.component';
import { TextsEntryComponent } from './components/textsEntry/textsEntry.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    TextsPageComponent,
    TextsComponent,
    TextsEntryComponent,
  ],
  exports: [
    TextsPageComponent,
    TextsComponent,
    TextsEntryComponent,
  ]
})
export class TextsPageModule { }
