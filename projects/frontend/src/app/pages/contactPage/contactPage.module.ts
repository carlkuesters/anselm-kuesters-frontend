import {NgModule} from '@angular/core';

import {ContactPageComponent} from './contactPage.component';
import {ContactFormComponent} from './components/contactForm/contactForm.component';
import {SharedModule} from '../../shared/shared.module';

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
