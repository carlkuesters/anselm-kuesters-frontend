import {Component, Input, OnInit} from '@angular/core';

import {Comment} from '../../../textsPage/classes/comment';

@Component({
  selector: 'comment-component',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  formattedDate: string;

  ngOnInit() {
    this.formattedDate = this.getFormattedDate(this.comment.date);
  }

  // TODO: Move to util? (or even use a library? overkill?)
  private getFormattedDate(timestamp: number): string {
    let date = new Date(timestamp * 1000);
    return date.getDate() + '. ' + (date.getMonth() + 1) + '.';
  }
}
