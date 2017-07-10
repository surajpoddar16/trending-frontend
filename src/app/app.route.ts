// Routing Module for application

// '/' is application home page,
// home page requires a valid avatar
// redirect to 'get-avatar' if a valid avatar is not present

// 'get-avatar'
// this page fetches a new avatar for user from backend and loads home page.

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatarComponent } from './avatar/avatar.component';
import { HomeComponent } from './home/home.component';
import { AvatarGuard } from './service/avatar.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        canActivate: [AvatarGuard],
        component: HomeComponent
      },
      {
        path: 'get-avatar',
        component: AvatarComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
