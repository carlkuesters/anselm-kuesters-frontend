import {Comment} from './comment.interface';
import {Publication} from './publication.interface';
import {Relation} from './relation.interface';

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
