import { Directive, HostBinding, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
