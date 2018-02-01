import {Directive, Input, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[backgroundImage]',
})
export class BackgroundImageDirective implements OnInit {
  @Input() backgroundImage: string;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundImage = 'url(\'' + this.backgroundImage + '\')';
  }
}
