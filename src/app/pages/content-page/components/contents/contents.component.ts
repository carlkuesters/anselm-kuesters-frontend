import {Component, Input, OnChanges} from '@angular/core';

import {parseDate} from '../../../../core/util/date/date.util';
import {ContentView} from '../../../../model/content-view';
import {ContentsOfYear} from '../../model/contents-of-year';

@Component({
  selector: 'anselm-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnChanges {
  @Input() contents: ContentView[];
  contentsByYear: ContentsOfYear[];

  ngOnChanges() {
    if (this.contents) {
      this.contentsByYear = [];
      // Group contentViews by year
      this.contents.forEach(content => {
        const year = new Date(parseDate(content.date)).getFullYear();

        let contentsOfYear = this.contentsByYear.find(contentsOfCurrentYear => {
          return contentsOfCurrentYear.year === year;
        });
        if (contentsOfYear == null) {
          contentsOfYear = {
            year,
            contents: [],
          };
          this.contentsByYear.push(contentsOfYear);
        }
        contentsOfYear.contents.push(content);
      });
      // Sort each years group internally by content date
      this.contentsByYear.forEach(contentsOfYear => {
        contentsOfYear.contents.sort((content1, content2) => {
          return (parseDate(content2.date) - parseDate(content1.date));
        });
      });
      // Sort the groups themselves by their year
      this.contentsByYear.sort((contentsOfYear1, contentsOfYear2) => {
        return (contentsOfYear2.year - contentsOfYear1.year);
      });
    }
  }
}
