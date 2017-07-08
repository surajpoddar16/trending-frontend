import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  avatar: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAvatar();
  }

  getAvatar() {
    var self = this;
    this.avatar = this.userService.getAvatarFromLocalStorage();
  }
}
