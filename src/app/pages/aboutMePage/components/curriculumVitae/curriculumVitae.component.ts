import {Component, Input} from '@angular/core';

import {AboutMeEvent} from '../../../../model/about-me-event';

@Component({
  selector: 'anselm-curriculum-vitae',
  templateUrl: './curriculumVitae.component.html',
  styleUrls: ['./curriculumVitae.component.scss']
})
export class CurriculumVitaeComponent {
  @Input() events: AboutMeEvent[];
}
