import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticationComponent } from '../authentication.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'add-new-user',
    component: RegisterComponent,
  },
];
export const AuthenticationRouting: ModuleWithProviders = RouterModule.forChild(routes);
