import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from './app.config';
import { ResponseService } from './response.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopicService {
  constructor(
    private appConfig: AppConfig,
    private responseService: ResponseService,
    private http: Http) { }

  newTopicUrl = this.appConfig.baseUrl + '/topic';
  getTopicsUrl = this.appConfig.baseUrl + '/topic/sorted-all';
  voteUrl = this.appConfig.baseUrl + '/topic/vote';

  defaultHeaders = new Headers({ 'Content-Type': 'application/json' });

  newTopic(params: any): Promise<any> {
    let options = new RequestOptions({ headers: this.defaultHeaders });
    let body = JSON.stringify(params);

    return this.http
      .post(this.newTopicUrl, body, options)
      .toPromise()
      .then(this.responseService.extractData)
      .catch(this.responseService.handleError);
  }

  getTopics(pageNumber: number, limit: number): Promise<any> {
    let options = new RequestOptions({ headers: this.defaultHeaders });

    var url = this.getTopicsUrl + `?pageNumber=${pageNumber}&limit=${limit}`

    return this.http
      .get(url, options)
      .toPromise()
      .then(this.responseService.extractData)
      .catch(this.responseService.handleError);
  }

  vote(params: any): Promise<any> {
    let options = new RequestOptions({ headers: this.defaultHeaders });

    let body = JSON.stringify(params);

    return this.http
      .post(this.voteUrl, body, options)
      .toPromise()
      .then(this.responseService.extractData)
      .catch(this.responseService.handleError);
  }
}
