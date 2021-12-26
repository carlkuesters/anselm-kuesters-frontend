import {Component, Input} from '@angular/core';

import {ContentView} from '../../../../model/content-view';

@Component({
  selector: 'anselm-texts-entry',
  templateUrl: './textsEntry.component.html',
  styleUrls: ['./textsEntry.component.scss']
})
export class TextsEntryComponent {
  @Input() content: ContentView;
}
