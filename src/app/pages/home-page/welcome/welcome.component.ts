import {Component, Input} from '@angular/core';

@Component({
  selector: 'anselm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input() textStart: string;
  @Input() textMiddle: string;
  @Input() textEnd: string;
}
