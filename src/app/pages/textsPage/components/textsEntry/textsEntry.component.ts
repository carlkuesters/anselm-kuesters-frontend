import {Component, Input} from '@angular/core';

import {DisplayedTextEntry} from '../../../../model/displayed-text-entry';

@Component({
  selector: 'anselm-texts-entry',
  templateUrl: './textsEntry.component.html',
  styleUrls: ['./textsEntry.component.scss']
})
export class TextsEntryComponent {
  @Input() textEntry: DisplayedTextEntry;
}
