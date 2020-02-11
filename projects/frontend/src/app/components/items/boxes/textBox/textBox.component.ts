import {Component, Input} from '@angular/core';

@Component({
  selector: 'anselm-text-box',
  templateUrl: './textBox.component.html',
  styleUrls: ['./textBox.component.scss']
})
export class TextBoxComponent {
  @Input() backgroundImagePath: string;
}
