import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() pictures: [string];
  private curSlide: number = 1;

  constructor() { }

  ngOnInit() {
  }

  increase(val: number) {
    this.curSlide += val;
  }

  onSwipe(evt, val: number) {
    this.curSlide = evt.deltaX > 0 ? this.curSlide += val : this.curSlide -= val;
  }

}
