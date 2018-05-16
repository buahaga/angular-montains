import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AuthenticationModule } from './authentication/authentication.module';
import { ContentModule } from './content/content.module'
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthenticationServicePost } from './services/authentication-post.service';
import { AuthenticationServiceGet } from './services/authentication-get.service';
import { AuthenticationInterceptor } from './services/authentication.interceptor'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthenticationModule,
    ContentModule,
    routing,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthenticationServicePost,
    AuthenticationServiceGet, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
