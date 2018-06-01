import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component'
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PaginatorComponent,
    RangeSliderComponent,
    DraggableDirective,
  ],
  exports: [
    PaginatorComponent,
    RangeSliderComponent,
  ],
})

export class SharedModule { }
