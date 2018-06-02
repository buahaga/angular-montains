import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Danger {
  minDanger: number;
  maxDanger: number;
}

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent implements OnInit {
  @Input() position: number;
  @Input() dangerFormGroup: FormGroup;
  public handlersValues: Danger;

  constructor() {}

  ngOnInit() {
    this.handlersValues = {...this.dangerFormGroup.value};
  }

  onDrag(movement: number, side: string) {
    const step = 10;
    const offset = Math.floor((movement - this.dangerFormGroup.get(side).value) / step);
    const tempState: { minDanger, maxDanger } = {...this.handlersValues};
    tempState[side] = Math.round(this.dangerFormGroup.get(side).value / step) + offset;
    const isHandlersCollision = tempState.minDanger < tempState.maxDanger;
    const isHandlersInRange = tempState.minDanger >= 0 && tempState.maxDanger < 11;
    if (isHandlersCollision && isHandlersInRange) {
      this.handlersValues = {...tempState};
    }
  }

  onDragEnd() {
    this.dangerFormGroup.setValue({...this.handlersValues});
    this.dangerFormGroup.markAsDirty();
    console.log(this.dangerFormGroup.value)
  }

}

// import { Component, Input } from '@angular/core';
// import { FormGroup } from '@angular/forms';
//
// interface Drag {
//   movement: number;
//   opposite: number;
// }
//
// @Component({
//   selector: 'app-range-slider',
//   templateUrl: './range-slider.component.html',
//   styleUrls: ['./range-slider.component.css']
// })
// export class RangeSliderComponent {
//   @Input() dangerFormGroup: FormGroup;
//   step: number = 10;
//
//   onDragLeft(drag: Drag) {
//     const formValue = {
//       minDanger: Math.ceil(drag.movement / this.step),
//       maxDanger: Math.ceil(drag.opposite / this.step)
//     }
//     this.dangerFormGroup.setValue({...{
//         minDanger: Math.ceil(drag.movement / this.step),
//         maxDanger: Math.ceil(drag.opposite / this.step)
//       }
//     });
//     console.log(this.dangerFormGroup.value)
//   }
//
//   onDragRight(drag: Drag) {
//     this.dangerFormGroup.setValue({...{
//         maxDanger: Math.ceil(drag.movement / this.step),
//         minDanger: Math.ceil(drag.opposite / this.step)
//       }
//     })
//     console.log(this.dangerFormGroup.value)
//   }
//
// }
