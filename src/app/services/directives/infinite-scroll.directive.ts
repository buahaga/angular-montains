import { Directive, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appInfiniteScroller]'
})
export class InfiniteScrollerDirective implements AfterViewInit {

  private scrollEvent$;

  ngAfterViewInit() {

  }
  
}
