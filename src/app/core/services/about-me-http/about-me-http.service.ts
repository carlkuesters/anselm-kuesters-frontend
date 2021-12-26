import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {AboutMeEvent} from '../../../model/about-me-event.interface';
import {Achievement} from '../../../model/achievement.interface';
import {ApiResponse} from '../../../model/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutMeHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getEvents(): Observable<ApiResponse<AboutMeEvent[]>> {
    return this.httpClient.get<ApiResponse<AboutMeEvent[]>>('/api/events?sort=date:desc');
  }

  getAchievements(): Observable<ApiResponse<Achievement[]>> {
    return this.httpClient.get<ApiResponse<Achievement[]>>('/api/achievements?populate=*&sort=date:desc');
  }
}
