import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatarComponent } from './avatar/avatar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
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
