import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {ItemsModule} from '../../items/items.module';
import {ContactPageComponent} from './contactPage.component';
import {ContactFormComponent} from './components/contactForm/contactForm.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    ContactPageComponent,
    ContactFormComponent,
  ],
  exports: [
    ContactPageComponent,
    ContactFormComponent,
  ]
})
export class ContactPageModule { }
