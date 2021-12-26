import {Component, Input} from '@angular/core';

import {CommentView} from '../../../model/comment-view.interface';

@Component({
  selector: 'anselm-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: CommentView;
}
