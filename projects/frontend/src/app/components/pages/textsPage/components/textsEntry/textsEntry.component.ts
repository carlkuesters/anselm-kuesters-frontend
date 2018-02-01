import {Component, Input} from '@angular/core';

import {Text} from '../../classes/text';

@Component({
  selector: 'texts-entry-component',
  templateUrl: './textsEntry.component.html',
  styleUrls: ['./textsEntry.component.scss']
})
export class TextsEntryComponent {
  @Input() text: Text;
}
