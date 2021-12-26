import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {ContentEntryComponent} from './components/content-entry/content-entry.component';
import {ContentsComponent} from './components/contents/contents.component';
import {ContentPageComponent} from './content-page.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ContentPageComponent,
    ContentsComponent,
    ContentEntryComponent,
  ],
  exports: [
    ContentPageComponent,
  ]
})
export class ContentPageModule { }
