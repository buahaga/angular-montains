import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  @Input() pictures: string[];
  private currentSlide: number = 1;
  private element: HTMLElement = this.elementRef.nativeElement;

  constructor( private elementRef: ElementRef ) { }

  ngAfterViewInit() {
    this.setSlide();
    this.nextSlide();
  }

  setSlide() {
    const containerEl: HTMLElement = this.element.querySelector('.carousel-ul');
    const slides = this.element.querySelectorAll('.carousel-li');
    const num = (this.currentSlide % slides.length) + 1;
    containerEl.style.left = (-1 * 100 * (num - 1)) + '%';
    containerEl.style.width = (slides.length * 100) + '%';
    for (let i = 0; i < slides.length; i++) {
      const slideEl = slides[i] as HTMLElement;
      slideEl.style.display = 'inline-block';
      slideEl.style.width = (100 / slides.length) + '%';
    }
  }

  nextSlide() {
    this.currentSlide += 1;
    this.setSlide();
  }

  prevSlide() {
    this.setSlide();
    this.currentSlide -= 1;
  }

  onSwipe(evt) {
    evt.deltaX > 0 ? this.nextSlide() : this.prevSlide();
  }

}
