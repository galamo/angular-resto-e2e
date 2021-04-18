import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[hoverMe]'
})
export class HoverDirective {
  @Input() color;

  public el: any;

  constructor(public element: ElementRef, private renderer: Renderer2) {
    this.el = element;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', "white");
  }
}
