import {Component, Input} from '@angular/core';

import {DisplayedTextEntry} from '../../../../model/displayed-text-entry';

@Component({
  selector: 'anselm-newest-texts',
  templateUrl: './newestTexts.component.html',
  styleUrls: ['./newestTexts.component.scss']
})
export class NewestTextsComponent {
  @Input() textEntries: DisplayedTextEntry[];
}
