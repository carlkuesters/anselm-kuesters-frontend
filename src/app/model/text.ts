import {Comment} from './comment';
import {Publication} from './publication';
import {Relation} from './relation';

export interface Text {
  readonly id: number;
  readonly attributes: {
    readonly title: string;
    readonly text: string;
    readonly date: string;
    readonly comments: Relation<Comment[]>;
    readonly publications: Relation<Publication[]>;
  }
}
