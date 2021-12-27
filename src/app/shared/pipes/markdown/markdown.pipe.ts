import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import {marked} from 'marked';

@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(text: string): SafeHtml {
    let html = '';
    if (text) {
      html = marked(text).replace('<a ', '<a target="_blank" ');
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
