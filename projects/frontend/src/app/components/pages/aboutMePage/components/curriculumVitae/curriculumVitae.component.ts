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
    <AboutMeEvent>{date: '2017', text: 'Lorem Ipsum'},
    <AboutMeEvent>{date: '2014', text: 'Dolor Sit', major: true},
    <AboutMeEvent>{date: 'Juni 2004', text: 'Amet'},
    <AboutMeEvent>{date: 'Feburar 2003', text: '123 Test'},
    <AboutMeEvent>{date: '1992', text: 'Something', major: true}
  ];
}
