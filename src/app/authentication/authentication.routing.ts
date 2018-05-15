import { AuthenticationComponent } from './authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: AuthenticationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
