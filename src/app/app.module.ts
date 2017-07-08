import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app.route';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserService } from './service/user.service';
import { AppConfig } from './service/app.config';
import { ResponseService } from './service/response.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AvatarComponent,
    NavbarComponent
  ],
  providers: [
    UserService,
    AppConfig,
    ResponseService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
