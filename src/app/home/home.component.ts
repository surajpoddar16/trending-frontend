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
  // Flag set when topics are fetched.
  loadingTopics: boolean = false;

  // Page number and limit flags for fetching topics
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

  // Get topics sorted in descending order of upvotes.
  getTopics() {
    var self = this;
    this.loadingTopics = true;

    this.topicService.getTopics(this.pageNumber, this.limit).then(function(topics) {
      self.topics = topics;
      console.log(topics);
      self.loadingTopics = false;
    }, function(err) {
      self.toasterService.pop('error', 'Error', err);
    });
  }
}
