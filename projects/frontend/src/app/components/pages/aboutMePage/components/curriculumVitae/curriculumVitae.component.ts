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
    <AboutMeEvent>{date: '2018 :)', text: 'Master Economics', major: true},
    <AboutMeEvent>{date: 'Okt. 2016', text: 'Einschreibung Oxford', major: false},
    <AboutMeEvent>{date: 'WS 2015/16', text: 'Bachelor Economics', major: true},
    <AboutMeEvent>{date: 'Jan. 2015', text: 'Bachelor Gesch./German.', major: true},
    <AboutMeEvent>{date: 'WS 2011/12', text: 'Einschreibung Heidelberg', major: false},
    <AboutMeEvent>{date: '2011', text: 'Abitur', major: true},
    <AboutMeEvent>{date: '2008', text: '1. Preis Schreibwettbewerb', major: false},
    <AboutMeEvent>{date: '1992', text: 'Geburt in Freiburg', major: true}
  ];
}
