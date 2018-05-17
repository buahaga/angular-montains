import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  }
];
export const ContentComponentRouting: ModuleWithProviders = RouterModule.forChild(routes);
