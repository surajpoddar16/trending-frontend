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
  avatarImage: any;
  avatar: any;
  topic: string;
  submitting: boolean = false;

  @Output()
  submit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private topicService: TopicService,
    private toasterService: ToasterService,
    private sanitizer: DomSanitizer) {

    }

  ngOnInit() {
    this.getAvatarImage();
  }

  getAvatarImage() {
    var self = this;
    this.avatar = this.userService.getAvatarFromLocalStorage();
  }

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
      self.toasterService.pop('error', 'Error', err);
      self.submitting = false;
    });
  }

  clearComponent() {
    this.topic = "";
  }

  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
