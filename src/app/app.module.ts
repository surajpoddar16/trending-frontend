import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.route';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';

import { UserService } from './service/user.service';
import { TopicService } from './service/topic.service';
import { AppConfig } from './service/app.config';
import { ResponseService } from './service/response.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ToasterModule
  ],
  declarations: [
    AppComponent,
    AvatarComponent,
    NavbarComponent,
    HomeComponent,
    TopicComponent
  ],
  providers: [
    UserService,
    AppConfig,
    ResponseService,
    TopicService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
