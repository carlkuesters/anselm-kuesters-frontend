import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

import {TextPageComponent} from './textPage.component';
import {PublicationsComponent} from './components/publications/publications.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';

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
