// Topic component is used for creating a new Topic and posting it on server.

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { TopicService } from '../service/topic.service';
import { ToasterService } from 'angular2-toaster';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  // Avatar of topic publisher
  avatar: any;

  // Topic string to publish
  topic: string;

  // Flag set on submitting a topic
  submitting: boolean = false;

  // On topic submission event
  @Output()
  submit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private topicService: TopicService,
    private toasterService: ToasterService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getAvatar();
  }

  // Get avatar data from local storage
  getAvatar() {
    var self = this;
    this.avatar = this.userService.getAvatarFromLocalStorage();
  }

  // Submit a topic on server
  submitTopic() {
    var self = this;
    this.submitting = true;

    this.topicService.newTopic({
      title: this.topic,
      authorName: this.avatar.name,
      authorImage: this.avatar.profileImage
    }).then(function(res) {
      self.submitting = false;
      self.toasterService.pop('success', 'Topic Created', 'Topic created successfully');
      self.clearComponent();
      self.submit.emit(true);

    }, function(err) {
      self.submitting = false;
      self.toasterService.pop('error', 'Error', err);
    });
  }

  // On topic submission reset topic input and property
  clearComponent() {
    this.topic = "";
  }

  // Sanitize avatar image url of publisher
  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
