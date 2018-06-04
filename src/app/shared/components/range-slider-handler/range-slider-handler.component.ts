import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-range-slider-handler',
  templateUrl: './range-slider-handler.component.html',
  styleUrls: ['./range-slider-handler.component.css'],
})
export class RangeSliderHandlerComponent {

  @Input() position: number;
  @Input() control: FormControl;
  @Output() positionChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  onDrag(movement: number) {
    const step = 10;
    const offset = Math.floor((movement - this.control.value) / step);
    const position = Math.round(this.control.value / step) + offset;
    if (position >= 0 && position < 11) {
      this.positionChange.emit(position);
    }
  }

  onDragEnd() {
    this.control.setValue(this.position);
    this.control.markAsDirty();
  }

}
