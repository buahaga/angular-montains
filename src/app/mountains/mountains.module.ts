import { MountainsRouting } from './mountains.routing';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MountainsComponent } from './mountains.component';
import { MountainsListComponent } from './mountains-list/mountains-list.component';
import { MountainDetailsComponent } from './mountain-details/mountain-details.component';
import { FilterComponent } from './filter/filter.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MountainsRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6aOYWefxgC3R_O7t-9h5z3KDx02e6nUY'
    }),
  ],
  declarations: [
    MountainsComponent,
    MountainsListComponent,
    MountainDetailsComponent,
    FilterComponent,
    PaginatorComponent
  ]
})
export class MountainsModule { }
