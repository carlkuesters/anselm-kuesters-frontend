import {Component} from '@angular/core';

import {AboutMeEvent} from '../../classes/aboutMeEvent';

@Component({
  selector: 'curriculum-vitae-component',
  templateUrl: './curriculumVitae.component.html',
  styleUrls: ['./curriculumVitae.component.scss']
})
export class CurriculumVitaeComponent {
  // TODO: Receive from backend
  events: AboutMeEvent[] = [
    <AboutMeEvent>{date: '2018', text: 'M.Phil - Economic and Social History', location: 'University of Oxford', major: true},
    <AboutMeEvent>{date: '2016', text: 'B.Sc. - Economics', location: 'Ruprecht-Karls-Universität Heidelberg', major: true},
    <AboutMeEvent>{date: '2015', text: 'Auslandssemester', location: 'University of Copenhagen', major: false},
    <AboutMeEvent>{date: '2015', text: 'B.A. - Geschichte und Germanistik', location: 'Ruprecht-Karls-Universität Heidelberg', major: true},
    <AboutMeEvent>{date: '2011', text: 'Abitur', location: 'Faust-Gymnasium Staufen', major: false},
    <AboutMeEvent>{date: '1992', text: 'Geburt', location: 'Freiburg im Breisgau', major: true}
  ];
}
