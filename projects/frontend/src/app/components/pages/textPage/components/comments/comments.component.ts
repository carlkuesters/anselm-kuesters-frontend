import {Component, Input} from '@angular/core';

import {Comment} from '../../../textsPage/classes/comment';

@Component({
  selector: 'anselm-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() comments: Comment[];
}
