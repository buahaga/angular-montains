import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent implements OnInit {

  @Input() rangeFormGroup: FormGroup;
  public minHandlerPosition: number;
  public maxHandlerPosition: number;

  constructor() { }

  ngOnInit() {
    this.minHandlerPosition = this.rangeFormGroup.get('minDifficulty').value;
    this.maxHandlerPosition = this.rangeFormGroup.get('maxDifficulty').value;
  }

  setMinHandlerPosition(position: number) {
    if (position < this.maxHandlerPosition) {
      this.minHandlerPosition = position;
    }
  }

  setMaxHandlerPosition(position: number) {
    if (position > this.minHandlerPosition) {
      this.maxHandlerPosition = position;
    }
  }

}
