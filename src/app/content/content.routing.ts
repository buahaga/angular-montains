import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContentComponent } from './content.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component'
import { MountainsResolver } from '../services/resolvers/mountains.resolver';
import { MountainResolver } from '../services/resolvers/mountain.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
      children: [
        {
          path: '',
          component: ListComponent,
          runGuardsAndResolvers: 'paramsOrQueryParamsChange',
          resolve: {
            mountains: MountainsResolver
          }
        },
        {
          path: ':id',
          component: ListItemComponent,
          resolve: {
            mountain: MountainResolver
          }
         }
      ]
  }
];
export const ContentRouting: ModuleWithProviders = RouterModule.forChild(routes);
