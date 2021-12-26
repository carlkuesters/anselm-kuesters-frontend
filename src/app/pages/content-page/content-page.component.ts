import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {ContentStoreFacadeService} from '../../core/services/content-store-facade/content-store-facade.service';
import {ContentView} from '../../model/content-view';

@Component({
  selector: 'anselm-content-page',
  templateUrl: './content-page.component.html'
})
export class ContentPageComponent implements OnInit {
  contentViews: Observable<ContentView[]>;

  constructor(private contentStoreFacadeService: ContentStoreFacadeService) {
  }

  ngOnInit(): void {
    this.contentViews = this.contentStoreFacadeService.getContentViews();

    this.contentStoreFacadeService.loadContent();
  }
}
