import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {stringify} from 'qs';

import {ApiResponse} from '../../../model/api-response.interface';
import {Text} from '../../../model/text.interface';
import {TextEntry} from '../../../model/text-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class TextHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getTextEntries(): Observable<ApiResponse<TextEntry[]>> {
    return this.httpClient.get<ApiResponse<TextEntry[]>>('/api/texts?' + stringify({
      fields: ['title', 'date'],
      populate: {
        publications: {
          fields: ['id'],
        },
        comments: {
          fields: ['id'],
        },
      },
    }));
  }

  getText(id: number): Observable<ApiResponse<Text>> {
    return this.httpClient.get<ApiResponse<Text>>('/api/texts/' + id + '?populate=*');
  }
}
