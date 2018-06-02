import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, tap, mergeMap, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {
  // @Input() dragField: string;
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

// import { AfterViewInit, Directive, EventEmitter, ElementRef, Input, Output, NgZone } from '@angular/core';
// import { Observable, fromEvent } from 'rxjs';
// import { map, switchMap, takeUntil } from 'rxjs/operators';
//
// @Directive({
//   selector: '[draggable]'
// })
// export class DraggableDirective implements AfterViewInit {
//
//   @Input() dragHandle: string;
//   @Input() oppositeHandle: string;
//   @Input() dragField: string;
//   @Output() drag: EventEmitter<number> = new EventEmitter<number>();
//
//   private handle: HTMLElement;
//   private movement: number;
//   private opposite: number;
//
//   constructor(private elementRef: ElementRef, private ngZone: NgZone) {
//   }
//
//   public ngAfterViewInit(): void {
//     this.handle = this.dragHandle ? document.querySelector(this.dragHandle) as HTMLElement : this.elementRef.nativeElement;
//     this.setupEvents();
//   }
//
//   private setupEvents() {
//     this.ngZone.runOutsideAngular(() => {
//       let mousedown$ = fromEvent(this.handle, 'mousedown');
//       let mousemove$ = fromEvent(document, 'mousemove');
//       let mouseup$ = fromEvent(document, 'mouseup');
//       let mousedrag$ = mousedown$.pipe(switchMap((event: MouseEvent) => {
//         return mousemove$
//           .pipe(map((event: MouseEvent) => {
//             event.preventDefault();
//             const field = document.querySelector(this.dragField).getBoundingClientRect();
//             const draggable = document.querySelector(this.dragHandle).getBoundingClientRect();
//             const opposite = document.querySelector(this.oppositeHandle).getBoundingClientRect();
//             this.opposite = opposite.x - field.x;
//             //TODO fix magic numbers
//             const rightBorder = event.clientX < field.x + field.width - 9;
//             const leftBorder = event.clientX > field.x - 1;
//             const collision = (draggable.x < opposite.x) ? draggable.x + 10 >= opposite.x : draggable.x - 10 <= opposite.x;
//             const direction = (draggable.x < opposite.x) ? (event.clientX < draggable.x) : (event.clientX > draggable.x);
//             if (rightBorder && leftBorder) {
//               this.movement = Math.ceil(event.clientX - field.x);
//               if (!collision) {
//                 this.handle.style.left = `${this.movement}px`;
//               } else if (direction) {
//                 this.handle.style.left = `${this.movement}px`;
//               }
//             }
//           }))
//           .pipe(takeUntil(mouseup$));
//       }))
//       mousedrag$.subscribe(() => {
//         this.drag.emit({movement: this.movement, opposite: this.opposite});
//       });
//       mouseup$.subscribe();
//     });
//   }
//
// }
