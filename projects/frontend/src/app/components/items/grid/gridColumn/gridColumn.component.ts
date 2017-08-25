import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'grid-column-component',
  templateUrl: './gridColumn.component.html',
  styleUrls: ['./gridColumn.component.scss']
})
export class GridColumnComponent implements OnInit {
  @Input() width: number = 1;

  constructor(private elementRef:ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'grid-column-width-' + this.width);
  }
}
