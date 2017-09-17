import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Text } from '../components/pages/textsPage/classes/text';

@Injectable()
export class BackendInformationService {

  private restEndpoint: string = 'http://localhost/anselm-kuesters/api/texts/index.php';
  private cachedResponses_Get: {[key: string]: Promise;} = {};

  constructor(private http: Http) { }

  getTexts(): Promise<Array<Text>> {
    return this.getCached(this.restEndpoint)
      .then((response) => {
        return response.json().map(function (textJson) {
          return new Text().deserialize(textJson);
        });
      });
  }

  getText(id: number): Promise<Text> {
    return this.http
      .get(this.restEndpoint + 'text?id=' + id)
      .toPromise()
      .then((response) => {
        return response.json() as Text;
      })
      .catch(this.handleError);
  }

  getCached(url: string): Promise{
    let cachedResponse = this.cachedResponses_Get[url];
    if (cachedResponse != undefined) {
      return cachedResponse;
    }
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
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
