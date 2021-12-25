import {Component, Input} from '@angular/core';

import {TextEntryView} from '../../../../model/text-entry-view';

@Component({
  selector: 'anselm-texts-entry',
  templateUrl: './textsEntry.component.html',
  styleUrls: ['./textsEntry.component.scss']
})
export class TextsEntryComponent {
  @Input() textEntry: TextEntryView;
}
