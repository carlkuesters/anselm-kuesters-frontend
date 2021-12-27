import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {AboutMePage} from '../../../model/pages/about-me-page.interface';
import {ContactPage} from '../../../model/pages/contact-page.interface';
import {ContentPage} from '../../../model/pages/content-page.interface';
import {HomePage} from '../../../model/pages/home-page.interface';
import {InfoPage} from '../../../model/pages/info-page.interface';
import {ApiResponse} from '../../../model/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PageHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getHomePage(): Observable<ApiResponse<HomePage>> {
    return this.httpClient.get<ApiResponse<HomePage>>('/api/home-page');
  }

  getContentPage(): Observable<ApiResponse<ContentPage>> {
    return this.httpClient.get<ApiResponse<ContentPage>>('/api/content-page');
  }

  getAboutMePage(): Observable<ApiResponse<AboutMePage>> {
    return this.httpClient.get<ApiResponse<AboutMePage>>('/api/about-me-page');
  }

  getContactPage(): Observable<ApiResponse<ContactPage>> {
    return this.httpClient.get<ApiResponse<ContactPage>>('/api/contact-page');
  }

  getInfoPage(): Observable<ApiResponse<InfoPage>> {
    return this.httpClient.get<ApiResponse<InfoPage>>('/api/info-page');
  }
}
