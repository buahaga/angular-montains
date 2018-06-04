import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component'
import { CarouselComponent } from './components/carousel/carousel.component';
import { DraggableDirective } from './directives/draggable.directive';
import { CarouselDirective } from './directives/carousel.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PaginatorComponent,
    RangeSliderComponent,
    CarouselComponent,
    DraggableDirective,
    CarouselDirective,
  ],
  exports: [
    PaginatorComponent,
    RangeSliderComponent,
    CarouselComponent,
  ],
})

export class SharedModule { }
