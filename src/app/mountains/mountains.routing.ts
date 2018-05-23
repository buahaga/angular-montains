import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MountainsComponent } from './mountains.component';
import { MountainsListComponent } from './mountains-list/mountains-list.component';
import { MountainDetailsComponent } from './mountain-details/mountain-details.component'
import { MountainsResolver } from '../services/resolvers/mountains.resolver';
import { MountainResolver } from '../services/resolvers/mountain.resolver';

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
            mountains: MountainsResolver
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
