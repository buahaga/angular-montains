import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationModule } from './authentication/authentication.module';
import { ContentModule } from './content/content.module'
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthenticationService } from './authentication.service';
import { AuthenticationInterceptor } from './authentication.interceptor'

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
    routing
  ],
  providers: [
    AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
