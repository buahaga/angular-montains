import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthenticationService } from './authentication/services/authentication.service';
import { AuthenticationInterceptor } from './shared/interceptors/authentication.interceptor'
import { StorageService } from './shared/services/storage.service';
import { TokenService } from './shared/services/token.service';
import { FilterService } from './shared/services/filter.service';
import { RouteGuardService } from './shared/guards/route.guard';
import { HttpService } from './shared/services/http.service';
import { MountainsResolver } from './shared/resolvers/mountains.resolver';
import { MountainResolver } from './shared/resolvers/mountain.resolver';
import { MountainsCountResolver } from './shared/resolvers/mountains-count.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    AuthenticationService,
    StorageService,
    TokenService,
    FilterService,
    RouteGuardService,
    HttpService,
    MountainsResolver,
    MountainResolver,
    MountainsCountResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
