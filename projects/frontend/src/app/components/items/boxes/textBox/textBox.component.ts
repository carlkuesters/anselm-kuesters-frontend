import {Component, Input} from '@angular/core';

@Component({
  selector: 'text-box-component',
  templateUrl: './textBox.component.html',
  styleUrls: ['./textBox.component.scss']
})
export class TextBoxComponent {
  @Input() backgroundImagePath: string;
}
