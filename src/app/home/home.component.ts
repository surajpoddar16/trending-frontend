import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from '../service/topic.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadingTopics: boolean = false;
  pageNumber: number = 0;
  limit: number = 20;
  topics: any = [];
  constructor(
    private router: Router,
    private topicService: TopicService,
    private toasterService: ToasterService) {}

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    var self = this;
    this.loadingTopics = true;

    this.topicService.getTopics(this.pageNumber, this.limit).then(function(topics) {
      self.topics = topics;
      self.loadingTopics = false;
    }, function(err) {
      self.toasterService.pop('error', 'Error', err);
    });
  }
}
