import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContentComponent } from './content.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component'

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
      children: [
        { path: '', component: ListComponent },
        { path: ':id', component: ListItemComponent }
      ]
  }
];
export const ContentComponentRouting: ModuleWithProviders = RouterModule.forChild(routes);
