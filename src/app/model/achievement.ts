import {AchievementType} from './achievement-type';
import {Relation} from './relation';

export interface Achievement {
  readonly id: number;
  readonly attributes: {
    readonly date: string;
    readonly dateTitle: string;
    readonly title: string;
    readonly location: string;
    readonly type: Relation<AchievementType>;
  };
}
