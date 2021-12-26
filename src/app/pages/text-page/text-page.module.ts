import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

import {CommentComponent} from './comment/comment.component';
import {CommentsComponent} from './comments/comments.component';
import {PublicationsComponent} from './publications/publications.component';
import {TextPageComponent} from './text-page.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TextPageComponent,
    PublicationsComponent,
    CommentsComponent,
    CommentComponent,
  ],
  exports: [
    TextPageComponent,
  ]
})
export class TextPageModule { }
