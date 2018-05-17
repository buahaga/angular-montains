import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthenticationServicePost } from './services/authentication-post.service';
import { AuthenticationServiceGet } from './services/authentication-get.service';
import { AuthenticationInterceptor } from './services/authentication.interceptor'
import { GetTokenService } from './services/get-token.service';
import { RouteGuardService } from './services/route-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return sessionStorage.getItem('sessionUser');
}

@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3200'],
        blacklistedRoutes: ['localhost:3200/login/']
      }
    })
  ],
  providers: [
    AuthenticationServicePost,
    AuthenticationServiceGet,
    GetTokenService,
    RouteGuardService,
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
