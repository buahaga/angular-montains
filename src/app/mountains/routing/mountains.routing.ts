import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MountainsComponent } from '../mountains.component';
import { MountainsListComponent } from '../components/mountains-list/mountains-list.component';
import { MountainDetailsComponent } from '../components/mountain-details/mountain-details.component'
import { MountainsResolver } from '../resolvers/mountains.resolver';
import { MountainResolver } from '../resolvers/mountain.resolver';
import { MountainsCountResolver } from '../resolvers/mountains-count.resolver';

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
