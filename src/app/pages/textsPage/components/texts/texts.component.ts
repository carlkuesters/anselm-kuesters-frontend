import {Component, Input, OnChanges} from '@angular/core';

import {parseDate} from '../../../../core/util/date/date.util';
import {TextEntryView} from '../../../../model/text-entry-view';
import {TextsOfYear} from '../../model/textsOfYear';

@Component({
  selector: 'anselm-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnChanges {
  @Input() textEntries: TextEntryView[];
  textsByYear: TextsOfYear[];

  ngOnChanges() {
    if (this.textEntries) {
      this.textsByYear = [];
      // Group textEntries by year
      this.textEntries.forEach(textEntry => {
        const year = new Date(parseDate(textEntry.date)).getFullYear();

        let textsOfYear = this.textsByYear.find(textsOfCurrentYear => {
          return textsOfCurrentYear.year === year;
        });
        if (textsOfYear == null) {
          textsOfYear = {
            year,
            textEntries: [],
          };
          this.textsByYear.push(textsOfYear);
        }
        textsOfYear.textEntries.push(textEntry);
      });
      // Sort each years group internally by textEntry date
      this.textsByYear.forEach(textsOfYear => {
        textsOfYear.textEntries.sort((textEntry1, textEntry2) => {
          return (parseDate(textEntry2.date) - parseDate(textEntry1.date));
        });
      });
      // Sort the groups themselves by their year
      this.textsByYear.sort((textsOfYear1, textsOfYear2) => {
        return (textsOfYear2.year - textsOfYear1.year);
      });
    }
  }
}
