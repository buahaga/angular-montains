import { ContentRouting } from './content.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ContentComponent } from './content.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContentRouting
  ],
  declarations: [
    ContentComponent,
    SearchComponent,
    ListComponent,
    ListItemComponent,
    MapComponent,
    SortComponent,
  ],
  providers: []
})
export class ContentModule { }
