import { AuthenticationRouting } from './routing/authentication.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRouting,
  ],
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthenticationService,
  ],
})
export class AuthenticationModule { }
