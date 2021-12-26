import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactPageComponent} from './contact-page.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ContactPageComponent,
    ContactFormComponent,
  ],
  exports: [
    ContactPageComponent,
  ]
})
export class ContactPageModule { }
