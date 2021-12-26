import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {ApiResponse} from '../../../model/api-response.interface';
import {Link} from '../../../model/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getLinks(): Observable<ApiResponse<Link[]>> {
    return this.httpClient.get<ApiResponse<Link[]>>('/api/links');
  }
}
