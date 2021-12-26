import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {ApiResponse} from '../../../model/api-response';
import {Link} from '../../../model/link';

@Injectable()
export class LinkHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getLinks(): Observable<ApiResponse<Link[]>> {
    return this.httpClient.get<ApiResponse<Link[]>>('/api/links');
  }
}
