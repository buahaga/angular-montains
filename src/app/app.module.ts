import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthenticationService } from './services/authentication.service';
import { StorageService } from './services/storage.service';
import { AuthenticationInterceptor } from './services/authentication.interceptor'
import { TokenService } from './services/token.service';
import { RouteGuardService } from './services/route-guard.service';
import { HttpService } from './services/http.service';

export function tokenGetter() {
  return sessionStorage.getItem('userToken');
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
    AuthenticationService,
    StorageService,
    TokenService,
    RouteGuardService,
    JwtHelperService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
