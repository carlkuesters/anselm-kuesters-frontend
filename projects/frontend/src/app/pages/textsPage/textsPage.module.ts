import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {TextsPageComponent} from './textsPage.component';
import {TextsComponent} from './components/texts/texts.component';
import {TextsEntryComponent} from './components/textsEntry/textsEntry.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TextsPageComponent,
    TextsComponent,
    TextsEntryComponent,
  ],
  exports: [
    TextsPageComponent,
  ]
})
export class TextsPageModule { }
