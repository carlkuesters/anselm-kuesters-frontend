import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {TextStoreFacadeService} from '../../core/services/text-store-facade/text-store-facade.service';
import {Text} from '../../model/text';

@Component({
  selector: 'anselm-text-page',
  templateUrl: './textPage.component.html',
  styleUrls: ['./textPage.component.scss']
})
export class TextPageComponent implements OnInit, AfterViewInit {

  text: Observable<Text>;

  constructor(private activatedRoute: ActivatedRoute,
              private textStoreFacadeService: TextStoreFacadeService) {
  }

  ngOnInit(): void {
    const seoId = this.activatedRoute.snapshot.paramMap.get('seoTextId');
    this.text = this.textStoreFacadeService.getText(seoId);
    this.textStoreFacadeService.loadText(seoId);
  }

  ngAfterViewInit(): void {
    // Scroll after text was rendered
    this.text.pipe(first(Boolean)).subscribe(() => {
      setTimeout(() => {
        this.scrollToAnchor();
      });
    });
  }

  private scrollToAnchor(): void {
    const routeFragment = this.activatedRoute.snapshot.fragment;
    if (routeFragment) {
      const anchorElement = document.getElementById(routeFragment);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }
}
