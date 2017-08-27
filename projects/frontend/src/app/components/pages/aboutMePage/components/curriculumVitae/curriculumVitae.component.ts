import { Component } from '@angular/core';

import { AboutMeEvent } from '../../classes/aboutMeEvent';

@Component({
  selector: 'curriculum-vitae-component',
  templateUrl: './curriculumVitae.component.html',
  styleUrls: ['./curriculumVitae.component.scss']
})
export class CurriculumVitaeComponent {
  // TODO: Receive from backend
  events: AboutMeEvent[] = [
    <AboutMeEvent>{date: '2017', text: 'abc'},
    <AboutMeEvent>{date: '2014', text: 'Dasd dasdas', major: true},
    <AboutMeEvent>{date: 'Juni 2004', text: 'def'},
    <AboutMeEvent>{date: 'Feburar 2003', text: '123 dw'},
    <AboutMeEvent>{date: '1992', text: 'Lorem Ipsum', major: true}
  ];
}
