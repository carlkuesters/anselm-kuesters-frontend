import {Component, Input} from '@angular/core';

import {ContentView} from '../../../model/content-view';

@Component({
  selector: 'anselm-content-entry',
  templateUrl: './content-entry.component.html',
  styleUrls: ['./content-entry.component.scss']
})
export class ContentEntryComponent {
  @Input() content: ContentView;
}
