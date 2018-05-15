import { ContentComponent } from './content.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'content', component: ContentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
