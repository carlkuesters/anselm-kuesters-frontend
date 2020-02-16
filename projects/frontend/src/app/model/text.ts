import {Comment} from './comment';
import {Publication} from './publication';

export interface Text {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly date: number;
  readonly comments: Comment[];
  readonly publications: Publication[];
}
