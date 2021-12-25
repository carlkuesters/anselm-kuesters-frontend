import {CommentView} from './comment-view';
import {PublicationView} from './publication-view';

export interface TextView {
  readonly title: string;
  readonly text: string;
  readonly publications: PublicationView[];
  readonly comments: CommentView[];
}
