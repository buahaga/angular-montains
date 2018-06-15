import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { RangeSliderHandlerComponent } from './components/range-slider-handler/range-slider-handler.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PaginatorComponent,
    RangeSliderComponent,
    RangeSliderHandlerComponent,
    CarouselComponent,
    DraggableDirective,
  ],
  exports: [
    PaginatorComponent,
    RangeSliderComponent,
    RangeSliderHandlerComponent,
    CarouselComponent,
  ],
})

export class SharedModule { }
