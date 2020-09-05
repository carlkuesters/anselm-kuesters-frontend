import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {AboutMeEvent} from '../../../model/aboutMeEvent';
import {Achievements} from '../../../model/achievements';

@Injectable()
export class AboutMeHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getEvents(): Observable<AboutMeEvent[]> {
    // TODO: Receive from backend
    // return this.httpClient.get<AboutMeEvent[]>('/api/events/index.php');
    return of([
      {date: 'Seit 2018', text: 'Promotion', location: 'MPI für Eur. Rechtsgeschichte Frankfurt', major: false},
      {date: 'Seit 2018', text: 'LL.M. - Europäisches Recht', location: 'Julius-Maximilians-Universität Würzburg', major: false},
      {date: '2018', text: 'M.Phil. - Economic and Social History', location: 'University of Oxford', major: true},
      {date: '2016', text: 'B.Sc. - Economics', location: 'Ruprecht-Karls-Universität Heidelberg', major: true},
      {date: '2015', text: 'Auslandssemester', location: 'University of Copenhagen', major: false},
      {date: '2015', text: 'B.A. - Geschichte und Germanistik', location: 'Ruprecht-Karls-Universität Heidelberg', major: true},
      {date: '2011', text: 'Abitur', location: 'Faust-Gymnasium Staufen', major: false},
      {date: '1992', text: 'Geburt', location: 'Freiburg im Breisgau', major: true}
    ]);
  }

  getAchievements(): Observable<Achievements> {
    return this.httpClient.get<Achievements>('/api/achievements/index.php');
  }
}
