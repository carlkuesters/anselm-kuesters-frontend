import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from "@angular/http/src/static_response";

import 'rxjs/add/operator/toPromise';

import { Text } from '../components/pages/textsPage/classes/text';

@Injectable()
export class BackendInformationService {

  private restEndpoint: string = 'http://anselm-kuesters.de/api/';
  private cachedResponses_Get: {[key: string]: Promise<Response>} = {};

  constructor(private http: Http) { }

  getTexts(): Promise<Array<Text>> {
    return this.getCached(this.restEndpoint + 'texts/index.php')
      .then((response) => {
        return response.json().map(function (textJson) {
          return new Text().deserialize(textJson);
        });
      });
  }

  getText(id: number): Promise<Text> {
    return this.http
      .get(this.restEndpoint + 'text/index.php?id=' + id)
      .toPromise()
      .then((response: Response) => {
        return new Text().deserialize(response.json());
      })
      .catch(this.handleError);
  }

  getCached(url: string): Promise<Response>{
    let cachedResponse = this.cachedResponses_Get[url];
    if (cachedResponse != undefined) {
      return cachedResponse;
    }
    return this.http
      .get(url)
      .toPromise()
      .then((response: Response) => {
        this.cachedResponses_Get[url] = Promise.resolve(response);
        return response;
      })
      .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
