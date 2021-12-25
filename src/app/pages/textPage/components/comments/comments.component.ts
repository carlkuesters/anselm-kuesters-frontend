import {Component, Input} from '@angular/core';

import {CommentView} from '../../../../model/comment-view';

@Component({
  selector: 'anselm-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() comments: CommentView[];
}
