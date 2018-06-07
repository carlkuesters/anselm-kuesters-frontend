import {Component, Input} from '@angular/core';

import {Comment} from '../../../textsPage/classes/comment';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() comments: Array<Comment>;
}