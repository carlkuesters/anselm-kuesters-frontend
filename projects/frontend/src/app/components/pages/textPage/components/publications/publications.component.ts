import {Component, Input} from '@angular/core';

import {Publication} from "../../../textsPage/classes/publication";

@Component({
  selector: 'publications-component',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  @Input() publications: Array<Publication>;
}
