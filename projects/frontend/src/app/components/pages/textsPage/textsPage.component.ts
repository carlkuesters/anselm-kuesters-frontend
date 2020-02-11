import {Component, OnInit} from '@angular/core';

import {Text} from './classes/text';

import {TextsService} from '../../../services/texts.service';

@Component({
  selector: 'anselm-texts-page',
  templateUrl: './textsPage.component.html',
  styleUrls: ['./textsPage.component.scss']
})
export class TextsPageComponent implements OnInit {
  texts: Text[];

  constructor(private textsService: TextsService) {
  }

  ngOnInit(): void {
    const self = this;
    this.textsService.getTexts().then(texts => {
      self.texts = texts;
    });
  }
}
