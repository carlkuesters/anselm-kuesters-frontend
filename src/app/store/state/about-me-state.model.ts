import {AboutMeEvent} from '../../model/about-me-event';
import {Achievement} from '../../model/achievement';
import {ApiResponse} from '../../model/api-response';

export interface AboutMeState {
  readonly responseEvents: ApiResponse<AboutMeEvent[]>;
  readonly responseAchievements: ApiResponse<Achievement[]>;
}
