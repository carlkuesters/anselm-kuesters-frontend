import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {InfoPageComponent} from './infoPage.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    InfoPageComponent
  ],
  exports: [
    InfoPageComponent
  ]
})
export class InfoPageModule { }
