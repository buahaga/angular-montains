import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { RangeSliderHandlerComponent } from './components/range-slider-handler/range-slider-handler.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DraggableDirective } from './directives/draggable.directive';
import { EmailToLoginPipe } from './pipes/email-login.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PaginatorComponent,
    RangeSliderComponent,
    RangeSliderHandlerComponent,
    CarouselComponent,
    DraggableDirective,
    EmailToLoginPipe,
  ],
  exports: [
    PaginatorComponent,
    RangeSliderComponent,
    RangeSliderHandlerComponent,
    CarouselComponent,
    EmailToLoginPipe,
  ],
})

export class SharedModule { }
