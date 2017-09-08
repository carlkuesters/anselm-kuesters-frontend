import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Text } from '../components/pages/textsPage/classes/text';

@Injectable()
export class BackendInformationService {
  private restEndpoint:string = 'http://anselm-kuesters.de/api/texts/index.php';

  constructor(private http: Http) { }

  getTexts(): Promise<Array<Text>> {
    return this.http
      .get(this.restEndpoint)
      .toPromise()
      .then((response) => {
        return response.json() as Text[];
      })
      .catch(this.handleError);
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
