import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {ItemsModule} from '../../items/items.module';
import {AboutMePageComponent} from './aboutMePage.component';
import {AchievementsComponent} from './components/achievements/achievements.component';
import {CurriculumVitaeComponent} from './components/curriculumVitae/curriculumVitae.component';

@NgModule({
  imports: [
    CommonModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    AboutMePageComponent,
    CurriculumVitaeComponent,
    AchievementsComponent,
  ],
  exports: [
    AboutMePageComponent,
    CurriculumVitaeComponent,
    AchievementsComponent,
  ]
})
export class AboutMePageModule { }
