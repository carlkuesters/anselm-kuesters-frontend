import {Component, Input} from '@angular/core';

import {Publication} from '../../../../model/publication';

@Component({
  selector: 'anselm-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  @Input() publications: Publication[];
}
