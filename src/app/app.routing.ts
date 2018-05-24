import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RouteGuardService } from './services/guards/route.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'mountains',
    canActivate: [
      RouteGuardService,
    ],
    loadChildren: './mountains/mountains.module#MountainsModule' ,
  },
  {
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
