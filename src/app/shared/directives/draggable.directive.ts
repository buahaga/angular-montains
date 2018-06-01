import { AfterViewInit, Directive, EventEmitter, ElementRef, Input, Output, NgZone } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators'

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements AfterViewInit {

  @Input() dragHandle: string;
  @Input() oppositeHandle: string;
  @Input() dragField: string;
  @Output() drag: EventEmitter<number> = new EventEmitter<number>();

  private handle: HTMLElement;
  private movement: number;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {
  }

  public ngAfterViewInit(): void {
    this.handle = this.dragHandle ? document.querySelector(this.dragHandle) as HTMLElement : this.elementRef.nativeElement;
    this.setupEvents();
  }

  private setupEvents() {
    this.ngZone.runOutsideAngular(() => {
      let mousedown$ = fromEvent(this.handle, 'mousedown');
      let mousemove$ = fromEvent(document, 'mousemove');
      let mouseup$ = fromEvent(document, 'mouseup');
      let mousedrag$ = mousedown$.pipe(switchMap((event: MouseEvent) => {
        return mousemove$
          .pipe(map((event: MouseEvent) => {
            event.preventDefault();
            const field = document.querySelector(this.dragField).getBoundingClientRect();
            const draggable = document.querySelector(this.dragHandle).getBoundingClientRect();
            const opposite = document.querySelector(this.oppositeHandle).getBoundingClientRect();
            //TODO fix magic numbers
            const rightBorder = event.clientX < field.x + field.width - 9;
            const leftBorder = event.clientX > field.x - 1;
            const collision = (draggable.x < opposite.x) ? draggable.x + 10 >= opposite.x : draggable.x - 10 <= opposite.x;
            const direction = (draggable.x < opposite.x) ? (event.clientX < draggable.x) : (event.clientX > draggable.x);
            if (rightBorder && leftBorder) {
              this.movement = Math.ceil(event.clientX - field.x);
              if (!collision) {
                this.handle.style.left = `${this.movement}px`;
              } else if (direction) {
                this.handle.style.left = `${this.movement}px`;
              }
            }
          }))
          .pipe(takeUntil(mouseup$));
      }))
      mousedrag$.subscribe(() => {
        this.drag.emit(this.movement);
      });
      mouseup$.subscribe();
    });
  }

}
