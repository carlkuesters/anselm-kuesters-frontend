import {Component} from '@angular/core';

import {AboutMeEvent} from '../../classes/aboutMeEvent';

@Component({
  selector: 'anselm-curriculum-vitae',
  templateUrl: './curriculumVitae.component.html',
  styleUrls: ['./curriculumVitae.component.scss']
})
export class CurriculumVitaeComponent {
  // TODO: Receive from backend
  events: AboutMeEvent[] = [
    {date: 'Seit 2018', text: 'Promotion', location: 'MPI für Eur. Rechtsgeschichte Frankfurt', major: false},
    {date: 'Seit 2018', text: 'LL.M. - Europäisches Recht', location: 'Julius-Maximilians-Universität Würzburg', major: false},
    {date: '2018', text: 'M.Phil. - Economic and Social History', location: 'University of Oxford', major: true},
    {date: '2016', text: 'B.Sc. - Economics', location: 'Ruprecht-Karls-Universität Heidelberg', major: true},
    {date: '2015', text: 'Auslandssemester', location: 'University of Copenhagen', major: false},
    {date: '2015', text: 'B.A. - Geschichte und Germanistik', location: 'Ruprecht-Karls-Universität Heidelberg', major: true},
    {date: '2011', text: 'Abitur', location: 'Faust-Gymnasium Staufen', major: false},
    {date: '1992', text: 'Geburt', location: 'Freiburg im Breisgau', major: true}
  ];
}
