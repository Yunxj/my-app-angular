import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]',
  standalone: true,
})
export class UpperDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.innerText =
      this.el.nativeElement.innerText.toUpperCase();
  }
}
