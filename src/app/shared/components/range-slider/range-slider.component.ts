
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent {
  @Input() dangerFormGroup: FormGroup;

  onDragLeft(drag: number) {
    console.log(drag)
    // const step = 20;
    // const offset = Math.floor(movement / step);
    // const tempState: { minDanger, maxDanger } = { ...this.dangerFormGroup.value };
    // console.log('first', tempState);
    // tempState[side] = Math.round(this[`${side}X`] / step) + offset;
    // const isHandlersCollision = tempState.minDanger < tempState.maxDanger;
    // const isHandlersInRange = tempState.minDanger >= 0 && tempState.maxDanger < 25;
    // if (isHandlersCollision && isHandlersInRange) {
    //   console.log('second', tempState);
    //   this.dangerFormGroup.setValue({ ...tempState });
    // }
  }

  onDragRight(drag: number) {
    console.log(drag)
  }

}
