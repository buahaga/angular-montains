import { Directive, ElementRef, Input, OnChanges, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements AfterViewInit {

  @Input() curSlide: number;
  private el = HTMLElement = this.elementRef.nativeElement;

  constructor( private elementRef: ElementRef ) { }

  ngAfterViewInit() {
    this.setSlide();
  }

  ngOnChanges() {
    this.setSlide();
  }

  setSlide() {
    const containerEl = this.el.querySelector(".carousel-ul");
    const slides = this.el.querySelectorAll(".carousel-li");
    const num = (this.curSlide % slides.length) + 1;
    containerEl.style.left = (-1 * 100 * (num - 1)) + '%';
    containerEl.style.width = (slides.length * 100) + '%';
    for (let i = 0; i < slides.length; i++) {
      const slideEl = slides[i];
      slideEl.style.display = 'inline-block';
      slideEl.style.width = (100 / slides.length) + '%';
    }
  }

}
