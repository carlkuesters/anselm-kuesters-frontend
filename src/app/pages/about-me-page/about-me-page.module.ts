import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {AchievementsComponent} from './achievements/achievements.component';
import {CurriculumVitaeComponent} from './curriculum-vitae/curriculum-vitae.component';
import {AboutMePageComponent} from './about-me-page.component';

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
