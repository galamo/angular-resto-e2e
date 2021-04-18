import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyme]'
})
export class CopymeDirective {

  constructor(public element: ElementRef) { }

  @HostListener('click')
  onClick() {
    var text = this.element.nativeElement.innerText
    navigator.clipboard.writeText(text).then(function () {
    }, function (err) {
    });
  }


}
