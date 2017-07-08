import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  avatarImage: any;
  topic: string;
  submitting: boolean = false;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAvatarImage();
  }

  getAvatarImage() {
    var self = this;
    this.avatarImage = this.userService.getAvatarFromLocalStorage().profileImage;
  }

  submitTopic() {
    this.submitting = true;
  }
}
