import {Component, Input, OnInit} from '@angular/core';

import {Comment} from '../../../../model/comment';

@Component({
  selector: 'anselm-comment',
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
    const date = new Date(timestamp * 1000);
    return date.getDate() + '. ' + (date.getMonth() + 1) + '.';
  }
}
