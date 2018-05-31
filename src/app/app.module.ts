import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthenticationInterceptor } from './shared/interceptors/authentication.interceptor'
import { TokenService } from './shared/services/token.service';
import { StorageService } from './shared/services/storage.service';
import { RouteGuardService } from './shared/guards/route.guard';

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
    TokenService,
    StorageService,
    RouteGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
