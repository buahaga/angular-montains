import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationInterceptor } from './services/interceptors/authentication.interceptor'
import { StorageService } from './services/storage.service';
import { TokenService } from './services/token.service';
import { RouteGuardService } from './services/guards/route-guard.service';
import { HttpService } from './services/http.service';
import { MountainsResolver } from './services/resolvers/mountains.resolver';
import { MountainResolver } from './services/resolvers/mountain.resolver';

@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthenticationService,
    StorageService,
    TokenService,
    RouteGuardService,
    HttpService,
    MountainsResolver,
    MountainResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
