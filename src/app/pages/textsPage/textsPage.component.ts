import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {ContentStoreFacadeService} from '../../core/services/content-store-facade/content-store-facade.service';
import {ContentView} from '../../model/content-view';

@Component({
  selector: 'anselm-texts-page',
  templateUrl: './textsPage.component.html'
})
export class TextsPageComponent implements OnInit {
  contentViews: Observable<ContentView[]>;

  constructor(private contentStoreFacadeService: ContentStoreFacadeService) {
  }

  ngOnInit(): void {
    this.contentViews = this.contentStoreFacadeService.getContentViews();

    this.contentStoreFacadeService.loadContent();
  }
}
