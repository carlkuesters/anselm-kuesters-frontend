import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';

import 'rxjs/add/operator/toPromise';

import {AchievementsMap} from '../components/pages/aboutMePage/classes/achievementsMap';
import {Quote} from '../components/pages/homePage/components/quote/classes/quote';
import {Serializable} from '../components/pages/textsPage/classes/serializable';
import {Text} from '../components/pages/textsPage/classes/text';

@Injectable()
export class BackendInformationService {

  private restEndpointBase: string = 'http://anselm-kuesters.de/api/';
  private cachedMappedResponses_Get: {[key: string]: Promise<any>} = {};

  constructor(private http: Http) { }

  getQuotes(): Promise<Quote[]> {
    return this.getArray('quotes/index.php', Quote);
  }

  getTexts(): Promise<Text[]> {
    return this.getArray('texts/index.php', Text);
  }

  getText(id: number): Promise<Text> {
    return this.getObject('text/index.php?id=' + id, Text);
  }

  getAchievements(): Promise<AchievementsMap> {
    return this.getObject('achievements/index.php', AchievementsMap);
  }

  private getArray<T extends Serializable<T>>(endpointPath: string, resultClass: new () => T): Promise<T[]>{
    return this.getCachedMapped(endpointPath, responseJson => {
      return responseJson.map(function (textJson) {
        return new resultClass().deserialize(textJson);
      });
    });
  }

  private getObject<T extends Serializable<T>>(endpointPath: string, resultClass: new () => T): Promise<T>{
    return this.getCachedMapped(endpointPath, responseJson => {
      return new resultClass().deserialize(responseJson);
    });
  }

  private getCachedMapped<T>(endpointPath: string, mapResponse: (responseJson) => T): Promise<T>{
    const url = this.restEndpointBase + endpointPath;
    let cachedResponse = this.cachedMappedResponses_Get[url];
    if (cachedResponse != undefined) {
      return cachedResponse;
    }
    return this.http
      .get(url)
      .toPromise()
      .then((response: Response) => {
        const mappedResult = mapResponse(response.json());
        this.cachedMappedResponses_Get[url] = Promise.resolve(mappedResult);
        return mappedResult;
      })
      .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
