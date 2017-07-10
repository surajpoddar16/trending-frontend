import { Component, Input } from '@angular/core';
import { TopicService } from '../service/topic.service';
import { ToasterService } from 'angular2-toaster';
import { AppConfig } from '../service/app.config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'topic-card',
  templateUrl: './topic_card.component.html',
  styleUrls: ['./topic_card.component.scss']
})
export class TopicCardComponent {
  @Input()
  topic: any;

  constructor(
    private topicService: TopicService,
    private appConfig: AppConfig,
    private toasterService: ToasterService,
    private sanitizer: DomSanitizer) {}

  upVote() {
    var self = this;
    this.topic.upVotes++;
    this.topicService.vote({
      id: this.topic.id,
      vote: 1,
    }).then(function(res) {
      // done..
    }, function(err) {
      self.toasterService.pop('error', 'Error', err);
      self.topic.upVotes--;
    });
  }

  downVote() {
    var self = this;
    this.topic.downVotes++;
    this.topicService.vote({
      id: this.topic.id,
      vote: -1,
    }).then(function(res) {
      // done..
    }, function(err) {
      self.toasterService.pop('error', 'Error', err);
      this.topic.downVotes--;
    });
  }

  getPrettyDate(dateString: any) {
    return new Date(dateString).toLocaleDateString();
  }

  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
