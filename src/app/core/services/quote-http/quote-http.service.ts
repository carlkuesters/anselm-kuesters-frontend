import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {ApiResponse} from '../../../model/api-response.interface';
import {Quote} from '../../../model/quote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getQuotes(): Observable<ApiResponse<Quote[]>> {
    return this.httpClient.get<ApiResponse<Quote[]>>('/api/quotes');
  }
}
