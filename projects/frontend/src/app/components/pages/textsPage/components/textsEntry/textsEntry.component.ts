import {Component, Input} from '@angular/core';

import {Text} from '../../classes/text';

@Component({
  selector: 'anselm-texts-entry',
  templateUrl: './textsEntry.component.html',
  styleUrls: ['./textsEntry.component.scss']
})
export class TextsEntryComponent {
  @Input() text: Text;
}
