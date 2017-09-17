import { Component, OnInit } from '@angular/core';

import { Text } from './classes/text';

import { BackendInformationService } from '../../../services/backendInformation.service';

@Component({
  selector: 'texts-page-component',
  templateUrl: './textsPage.component.html',
  styleUrls: ['./textsPage.component.scss']
})
export class TextsPageComponent implements OnInit {
  texts: Text[];

  constructor (private backendInformationService:BackendInformationService) {
  }

  ngOnInit(): void {
    const self = this;
    this.backendInformationService.getTexts().then(function (texts) {
      self.texts = texts;
    });
  }
}
