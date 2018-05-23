import { MountainsRouting } from './mountains.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MountainsComponent } from './mountains.component';
import { MountainsListComponent } from './mountains-list/mountains-list.component';
import { MountainDetailsComponent } from './mountain-details/mountain-details.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MountainsRouting
  ],
  declarations: [
    MountainsComponent,
    MountainsListComponent,
    MountainDetailsComponent,
    MapComponent,
    FilterComponent,
  ]
})
export class MountainsModule { }
