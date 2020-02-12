import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {AchievementsMap} from '../../pages/aboutMePage/classes/achievementsMap';
import {Quote} from '../../pages/homePage/components/quote/classes/quote';
import {Serializable} from '../../pages/textsPage/classes/serializable';
import {Text} from '../../pages/textsPage/classes/text';

@Injectable()
export class BackendInformationService {

  private restEndpointBase = '/api/';
  private cachedMappedResponsesGet: {[key: string]: Promise<any>} = {};

  constructor(private httpClient: HttpClient) { }

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

  private getArray<T extends Serializable<T>>(endpointPath: string, resultClass: new () => T): Promise<T[]> {
    return this.getCachedMapped(endpointPath, responseJson => {
      return responseJson.map(textJson => {
        return new resultClass().deserialize(textJson);
      });
    });
  }

  private getObject<T extends Serializable<T>>(endpointPath: string, resultClass: new () => T): Promise<T> {
    return this.getCachedMapped(endpointPath, responseJson => {
      return new resultClass().deserialize(responseJson);
    });
  }

  private getCachedMapped<T>(endpointPath: string, mapResponse: (responseJson) => T): Promise<T> {
    const url = this.restEndpointBase + endpointPath;
    const cachedResponse = this.cachedMappedResponsesGet[url];
    if (cachedResponse !== undefined) {
      return cachedResponse;
    }
    return this.httpClient
      .get(url)
      .toPromise()
      .then(response => {
        const mappedResult = mapResponse(response);
        this.cachedMappedResponsesGet[url] = Promise.resolve(mappedResult);
        return mappedResult;
      })
      .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
