import { routing } from './content.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ContentComponent } from './content.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [
    ContentComponent,
    SearchComponent,
    ListComponent,
    ListItemComponent,
    MapComponent,
    SortComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: []
})
export class ContentModule { }
