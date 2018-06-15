import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Rect } from '../../interfaces/rect';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() imagesSrc: string[];
  public currentSlide = 0;
  public containerPosition = '0px';
  public containerSize: Rect;
  private element: HTMLElement = this.elementRef.nativeElement;

  constructor( private elementRef: ElementRef ) { }

  ngOnInit() {
    this.containerSize = this.element.querySelector('.carousel-div').getBoundingClientRect() as Rect;
  }

  setContainerPosition() {
    const newPosition = -1 * (this.currentSlide * this.containerSize.width);
    if ( newPosition > (this.containerSize.width * this.imagesSrc.length * -1) && newPosition < 0 ) {
      this.containerPosition = `${newPosition}px`;
    } else {
      this.currentSlide = 0;
      this.containerPosition = `0px`;
    }
  }

  nextSlide() {
    this.currentSlide += 1;
    this.setContainerPosition();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
    } else {
      this.currentSlide = this.imagesSrc.length - 1;
    }
    this.setContainerPosition();
  }

  setControl(index: number) {
    this.currentSlide = index;
    this.setContainerPosition();
  }

  onSwipe(evt) {
    evt.deltaX > 0 ? this.nextSlide() : this.prevSlide();
  }

}
