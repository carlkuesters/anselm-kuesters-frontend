import {Component, Input} from '@angular/core';

@Component({
  selector: 'anselm-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent {
  @Input() imagePath: string;
  @Input() hasPadding: false;
}
