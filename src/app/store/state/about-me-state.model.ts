import {AboutMeEvent} from '../../model/aboutMeEvent';
import {Achievements} from '../../model/achievements';

export interface AboutMeState {
  readonly events: AboutMeEvent[];
  readonly achievements: Achievements;
}
