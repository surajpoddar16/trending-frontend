import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  avatar: any;
  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getAvatar();
  }

  getAvatar() {
    var self = this;
    this.avatar = this.userService.getAvatarFromLocalStorage();
  }

  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
