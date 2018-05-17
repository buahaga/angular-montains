import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';


const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  }
];
export const AuthenticationComponentRouting: ModuleWithProviders = RouterModule.forChild(routes);
