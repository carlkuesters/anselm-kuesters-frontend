import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {SeoService} from '../../../services/seo.service';
import {TextsService} from '../../../services/texts.service';
import {Text} from '../textsPage/classes/text';

@Component({
  selector: 'anselm-text-page',
  templateUrl: './textPage.component.html',
  styleUrls: ['./textPage.component.scss']
})
export class TextPageComponent implements OnInit, AfterViewInit {
  text: Text;
  private routeFragment: string;

  constructor(private textsService: TextsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const self = this;
    this.activatedRoute.params.forEach((params: Params) => {
        const textId: number = SeoService.extractId(params.seoTextId);
        this.textsService.getText(textId).then(text => {
          self.text = text;
          self.scrollToAnchor();
        });
    });
    this.activatedRoute.fragment.subscribe(fragment => { this.routeFragment = fragment; });
  }

  // TODO: Clean up this whole anchor mess - Is this really not possible in a better way in angular?

  ngAfterViewInit(): void {
    this.scrollToAnchor();
  }

  private scrollToAnchor(): void {
    setTimeout(() => {
      if (this.routeFragment) {
        const anchorElement = document.getElementById(this.routeFragment);
        if (anchorElement !== null) {
          anchorElement.scrollIntoView();
        }
      }
    });
  }
}
