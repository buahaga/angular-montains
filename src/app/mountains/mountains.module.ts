import { MountainsRouting } from './routing/mountains.routing';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MountainsComponent } from './mountains.component';
import { MountainsListComponent } from './components/mountains-list/mountains-list.component';
import { MountainDetailsComponent } from './components/mountain-details/mountain-details.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterService } from './services/filter.service';
import { MountainsService } from './services/mountains.service';
import { MountainsResolver } from './resolvers/mountains.resolver';
import { MountainResolver } from './resolvers/mountain.resolver';
import { CommentsResolver } from './resolvers/comments.resolver';
import { MountainsCountResolver } from './resolvers/mountains-count.resolver';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../environments/environment';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MountainsRouting,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
    }),
    SharedModule
  ],
  declarations: [
    MountainsComponent,
    MountainsListComponent,
    MountainDetailsComponent,
    FilterComponent,
  ],
  providers: [
    FilterService,
    MountainsService,
    MountainsResolver,
    MountainResolver,
    CommentsResolver,
    MountainsCountResolver,
  ]
})
export class MountainsModule { }
