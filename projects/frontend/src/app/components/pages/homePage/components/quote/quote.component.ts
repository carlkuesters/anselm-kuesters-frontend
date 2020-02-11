import {Component, Input} from '@angular/core';

import {Quote} from './classes/quote';

@Component({
  selector: 'anselm-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() quote: Quote;
}
