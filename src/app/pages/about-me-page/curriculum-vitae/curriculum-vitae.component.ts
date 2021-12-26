import {Component, Input} from '@angular/core';

import {AboutMeEvent} from '../../../model/about-me-event';

@Component({
  selector: 'anselm-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent {
  @Input() events: AboutMeEvent[];
}
