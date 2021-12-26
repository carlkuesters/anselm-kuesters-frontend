import {Component, Input} from '@angular/core';

import {PublicationView} from '../../../model/publication-view';

@Component({
  selector: 'anselm-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  @Input() publications: PublicationView[];
}
