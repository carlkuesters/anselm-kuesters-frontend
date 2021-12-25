import {Component, Input} from '@angular/core';

import {TextEntryView} from '../../../../model/text-entry-view';

@Component({
  selector: 'anselm-newest-texts',
  templateUrl: './newestTexts.component.html'
})
export class NewestTextsComponent {
  @Input() textEntries: TextEntryView[];
}
