import {Component, Input, OnChanges} from '@angular/core';

import {Text} from '../../classes/text';
import {TextsOfYear} from '../../classes/textsOfYear';

@Component({
  selector: 'anselm-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnChanges {
  @Input() texts: Text[];
  textsByYear: TextsOfYear[];

  ngOnChanges() {
    if (this.texts) {
      const textsByYear = [];
      // Group texts by year
      this.texts.forEach(text => {
        const year = new Date(text.date * 1000).getFullYear();

        let textsOfYear: TextsOfYear = textsByYear.find(textsOfCurrentYear => {
          return textsOfCurrentYear.year === year;
        });
        if (textsOfYear == null) {
          textsOfYear = {
            year,
            texts: [],
          };
          textsByYear.push(textsOfYear);
        }
        textsOfYear.texts.push(text);
      });
      // Sort each years group internally by text date
      textsByYear.forEach(textsOfYear => {
        textsOfYear.texts.sort((text1, text2) => {
          return (text2.date - text1.date);
        });
      });
      // Sort the groups themselves by their year
      textsByYear.sort((textsOfYear1, textsOfYear2) => {
        return (textsOfYear2.year - textsOfYear1.year);
      });
      this.textsByYear = textsByYear;
    }
  }
}
