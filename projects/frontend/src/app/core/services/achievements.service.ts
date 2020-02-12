import {Injectable} from '@angular/core';

import {Achievement} from '../../pages/aboutMePage/classes/achievement';
import {BackendInformationService} from './backendInformation.service';

@Injectable()
export class AchievementsService {

  constructor(private backendInformationService: BackendInformationService) {
  }

  getFurtherDevelopments(): Promise<Achievement[]> {
    return this.getAchievements('furtherDevelopments');
  }

  getAwards(): Promise<Achievement[]> {
    return this.getAchievements('awards');
  }

  getInTheMedia(): Promise<Achievement[]> {
    return this.getAchievements('inTheMedia');
  }

  private getAchievements(key: string): Promise<Achievement[]> {
    return this.backendInformationService.getAchievements().then(achievementsMap => {
      return achievementsMap.getAchievements(key);
    });
  }
}
