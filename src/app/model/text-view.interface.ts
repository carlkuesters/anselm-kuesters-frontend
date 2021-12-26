import {CommentView} from './comment-view.interface';
import {PublicationView} from './publication-view.interface';

export interface TextView {
  readonly title: string;
  readonly text: string;
  readonly publications: PublicationView[];
  readonly comments: CommentView[];
}
