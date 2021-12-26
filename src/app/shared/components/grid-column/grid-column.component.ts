import {Component, Input, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'anselm-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent implements OnInit {
  @Input() width = 1;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'grid-column-width-' + this.width);
  }
}
