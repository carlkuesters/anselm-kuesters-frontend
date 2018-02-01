import {NgModule} from '@angular/core';

import {BackgroundImageDirective} from './backgroundImage/backgroundImage.directive';

@NgModule({
  imports: [],
  declarations: [
    BackgroundImageDirective,
  ],
  exports: [
    BackgroundImageDirective,
  ]
})
export class DirectivesModule { }
