import { ContentRouting } from './mountains.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MountainsComponent } from './mountains.component';
import { SearchComponent } from './search/search.component';
import { MountainsListComponent } from './mountains-list/mountains-list.component';
import { MountainDetailsComponent } from './mountain-details/mountain-details.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContentRouting
  ],
  declarations: [
    MountainsComponent,
    SearchComponent,
    MountainsListComponent,
    MountainDetailsComponent,
    MapComponent,
    SortComponent,
  ]
})
export class MountainsModule { }
