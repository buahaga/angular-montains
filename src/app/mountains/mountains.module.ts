import { MountainsRouting } from './routing/mountains.routing';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MountainsComponent } from './mountains.component';
import { MountainsListComponent } from './components/mountains-list/mountains-list.component';
import { MountainDetailsComponent } from './components/mountain-details/mountain-details.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FilterService } from './services/filter.service';
import { HttpService } from './services/http.service';
import { MountainsResolver } from './resolvers/mountains.resolver';
import { MountainResolver } from './resolvers/mountain.resolver';
import { MountainsCountResolver } from './resolvers/mountains-count.resolver';

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
  ],
  providers: [
    FilterService,
    HttpService,
    MountainsResolver,
    MountainResolver,
    MountainsCountResolver,
  ]
})
export class MountainsModule { }
