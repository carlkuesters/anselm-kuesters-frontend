import {AboutMeEvent} from '../../model/about-me-event.interface';
import {Achievement} from '../../model/achievement.interface';
import {ApiResponse} from '../../model/api-response.interface';

export interface AboutMeState {
  readonly responseEvents: ApiResponse<AboutMeEvent[]>;
  readonly responseAchievements: ApiResponse<Achievement[]>;
}
