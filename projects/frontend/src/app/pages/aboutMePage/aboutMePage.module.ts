import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {AboutMePageComponent} from './aboutMePage.component';
import {AchievementsComponent} from './components/achievements/achievements.component';
import {CurriculumVitaeComponent} from './components/curriculumVitae/curriculumVitae.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    AboutMePageComponent,
    CurriculumVitaeComponent,
    AchievementsComponent,
  ],
  exports: [
    AboutMePageComponent,
  ]
})
export class AboutMePageModule { }
