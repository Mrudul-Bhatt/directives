import { Directive, ElementRef, Input } from '@angular/core';

// Attribute directive
@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // @Input()
  // backgroundColor: string = '';

  constructor(private element: ElementRef) {
    //never do this
    // setTimeout(() => {
    //   element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 50);
  }

  // @Input()
  // set backgroundColor(value: string) {
  //   this.element.nativeElement.style.backgroundColor = value;
  // }

  // @Input()
  // set appClass(value: string) {
  //   this.element.nativeElement.style.backgroundColor = value;
  // }

  @Input('appClass')
  set backgroundColor(value: string) {
    this.element.nativeElement.style.backgroundColor = value;
  }
}
