import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MountainsComponent } from './mountains.component';
import { MountainsListComponent } from './mountains-list/mountains-list.component';
import { MountainDetailsComponent } from './mountain-details/mountain-details.component'
import { MountainsResolver } from '../shared/resolvers/mountains.resolver';
import { MountainResolver } from '../shared/resolvers/mountain.resolver';
import { MountainsCountResolver } from '../shared/resolvers/mountains-count.resolver';

const routes: Routes = [
  {
    path: '',
    component: MountainsComponent,
      children: [
        {
          path: '',
          component: MountainsListComponent,
          runGuardsAndResolvers: 'paramsOrQueryParamsChange',
          resolve: {
            mountains: MountainsResolver,
            count: MountainsCountResolver
          }
        },
        {
          path: ':id',
          component: MountainDetailsComponent,
          resolve: {
            mountain: MountainResolver
          }
         }
      ]
  }
];
export const MountainsRouting: ModuleWithProviders = RouterModule.forChild(routes);
