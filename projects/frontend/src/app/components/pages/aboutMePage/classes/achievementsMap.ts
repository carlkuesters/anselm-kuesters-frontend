import {Serializable} from '../../textsPage/classes/serializable';
import {Achievement} from './achievement';

export class AchievementsMap implements Serializable<AchievementsMap> {
  private achievements: { [key: string]: Achievement[]; };

  deserialize(json): AchievementsMap {
    this.achievements = {};
    Object.keys(json).forEach(key => {
      this.achievements[key] = json[key].map(jsonAchievement => new Achievement().deserialize(jsonAchievement));
    });
    return this;
  }

  getAchievements(key: string): Achievement[] {
    return this.achievements[key];
  }
}
