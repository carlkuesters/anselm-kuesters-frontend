import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ItemsModule } from '../../items/items.module';

import { AboutMePageComponent } from './aboutMePage.component';
import { CurriculumVitaeComponent } from './components/curriculumVitae/curriculumVitae.component';

@NgModule({
  imports: [
    CommonModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    AboutMePageComponent,
    CurriculumVitaeComponent,
  ],
  exports: [
    AboutMePageComponent,
    CurriculumVitaeComponent,
  ]
})
export class AboutMePageModule { }
