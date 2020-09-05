import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Quote} from '../../../model/quote';

@Injectable()
export class QuoteHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>('/api/quotes/index.php');
  }
}
