import {Injectable} from '@angular/core';

import {Text} from '../components/pages/textsPage/classes/text';
import {BackendInformationService} from './backendInformation.service';

@Injectable()
export class TextsService {

  constructor(private backendInformationService: BackendInformationService) {
  }

  getNewestTexts(count: number): Promise<Text[]> {
    return this.getTexts().then((texts) => {
      return texts.sort((text1, text2) => text2.date - text1.date).slice(0, count);
    });
  }

  getTexts(): Promise<Text[]> {
    return this.backendInformationService.getTexts();
  }

  getText(id: number): Promise<Text> {
    return this.backendInformationService.getText(id);
  }
}
