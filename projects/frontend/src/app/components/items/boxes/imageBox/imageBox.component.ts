import {Component, Input} from '@angular/core';

@Component({
  selector: 'image-box-component',
  templateUrl: './imageBox.component.html',
  styleUrls: ['./imageBox.component.scss']
})
export class ImageBoxComponent {
  @Input() imagePath: string;
  @Input() hasPadding: false;
}
