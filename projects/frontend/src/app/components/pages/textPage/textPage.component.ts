import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Text } from '../textsPage/classes/text';

import { SeoService } from "../../../services/seo.service";
import { TextsService } from "../../../services/texts.service";

@Component({
  selector: 'text-page-component',
  templateUrl: './textPage.component.html',
  styleUrls: ['./textPage.component.scss']
})
export class TextPageComponent implements OnInit {
  text: Text;

  constructor (private textsService: TextsService,
               private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const self = this;
    this.activatedRoute.params.forEach((params: Params) => {
        const textId: number = SeoService.extractId(params['seoTextId']);
        this.textsService.getText(textId).then(function (text) {
          self.text = text;
        });
    });
  }
}
