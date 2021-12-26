import {Component, Input} from '@angular/core';

import {ContentView} from '../../../model/content-view.interface';

@Component({
  selector: 'anselm-newest-texts',
  templateUrl: './newest-texts.component.html'
})
export class NewestTextsComponent {
  @Input() textEntries: ContentView[];
}
