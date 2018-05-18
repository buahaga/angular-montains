import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RouteGuardService } from './services/guards/route-guard.service';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'content',
    canActivate: [
      RouteGuardService,
    ],
    loadChildren: './content/content.module#ContentModule' ,
  },
  {
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
