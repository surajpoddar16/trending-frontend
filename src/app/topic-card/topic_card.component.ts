import { Component, OnInit, Input } from '@angular/core';
import { TopicService } from '../service/topic.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'topic-card',
  templateUrl: './topic_card.component.html',
  styleUrls: ['./topic_card.component.scss']
})
export class TopicCardComponent implements OnInit {
  @Input()
  topic: any;

  constructor(
    private topicService: TopicService,
    private toasterService: ToasterService) {}

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
}
