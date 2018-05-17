import { AuthenticationComponentRouting } from './authentication.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationComponentRouting
  ],
  declarations: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
