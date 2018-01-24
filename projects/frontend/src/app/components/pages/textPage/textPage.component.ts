import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Text } from '../textsPage/classes/text';

import { BackendInformationService } from '../../../services/backendInformation.service';

@Component({
  selector: 'text-page-component',
  templateUrl: './textPage.component.html',
  styleUrls: ['./textPage.component.scss']
})
export class TextPageComponent implements OnInit {
  text: Text;

  constructor (private backendInformationService: BackendInformationService,
               private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const self = this;
    this.activatedRoute.params.forEach((params: Params) => {
        const textId: number = this.extractId(params['seoTextId']);
        this.backendInformationService.getText(textId).then(function (text) {
          self.text = text;
        });
    });
  }

  private extractId(seoTextId: string): number {
    const seperator = '-';
    const lastSeperatorIndex = seoTextId.lastIndexOf(seperator);
    let idString: string;
    if (lastSeperatorIndex !== -1) {
      idString = seoTextId.substring(lastSeperatorIndex + seperator.length);
    }
    else {
      idString = seoTextId;
    }
    return +idString;
  }
}
