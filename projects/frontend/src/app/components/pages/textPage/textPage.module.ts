import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {ItemsModule} from '../../items/items.module';
import {TextPageComponent} from './textPage.component';
import {PublicationsComponent} from './components/publications/publications.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    TranslateModule,

    ItemsModule,
  ],
  declarations: [
    TextPageComponent,
    PublicationsComponent,
    CommentsComponent,
    CommentComponent,
  ],
  exports: [
    TextPageComponent,
    PublicationsComponent,
    CommentsComponent,
    CommentComponent,
  ]
})
export class TextPageModule { }
