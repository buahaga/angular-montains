import { AuthenticationComponentRouting } from './authentication.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationComponentRouting
  ],
  declarations: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
