import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Text} from '../../../model/text';
import {TextEntry} from '../../../model/textEntry';

@Injectable()
export class TextHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getTextEntries(): Observable<TextEntry[]> {
    return this.httpClient.get<TextEntry[]>('/api/texts/index.php');
  }

  getText(id: number): Observable<Text> {
    return this.httpClient.get<Text>('/api/text/index.php?id=' + id);
  }
}
