import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, tap, mergeMap, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {
  @Output() dragStart: EventEmitter<number> = new EventEmitter<number>();
  @Output() dragEnd: EventEmitter<number> = new EventEmitter<number>();
  @Output() drag: EventEmitter<number> = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) {

    const domNode: HTMLElement = this.elementRef.nativeElement;

    const mouseDown = fromEvent<MouseEvent>(domNode, 'mousedown');
    const mouseMove = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseUp = fromEvent<MouseEvent>(document, 'mouseup');

    mouseDown
      .pipe(tap(({clientX}: MouseEvent) => this.dragStart.emit(clientX - domNode.getBoundingClientRect().left)))
      .pipe(mergeMap(() =>
        mouseMove
          .pipe(map((event: MouseEvent) => {
            event.preventDefault();
            return event.clientX;
          }))
          .pipe(takeUntil(
            mouseUp
              .pipe(tap(({clientX}: MouseEvent) => this.dragEnd.emit(clientX)))
          ))
      ))
      .subscribe((x) => {
        this.drag.emit(x - domNode.getBoundingClientRect().left);
      });

  }
}
