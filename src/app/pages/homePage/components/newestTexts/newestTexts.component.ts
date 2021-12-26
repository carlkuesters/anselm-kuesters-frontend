import {Component, Input} from '@angular/core';

import {ContentView} from '../../../../model/content-view';

@Component({
  selector: 'anselm-newest-texts',
  templateUrl: './newestTexts.component.html'
})
export class NewestTextsComponent {
  @Input() textEntries: ContentView[];
}
