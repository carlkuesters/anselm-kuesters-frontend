import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {TextEntriesStoreFacadeService} from '../../core/services/text-entries-store-facade/text-entries-store-facade.service';
import {TextEntryView} from '../../model/text-entry-view';

@Component({
  selector: 'anselm-texts-page',
  templateUrl: './textsPage.component.html'
})
export class TextsPageComponent implements OnInit {
  textEntries: Observable<TextEntryView[]>;

  constructor(private textEntriesStoreFacadeService: TextEntriesStoreFacadeService) {
  }

  ngOnInit(): void {
    this.textEntries = this.textEntriesStoreFacadeService.getTextEntriesViews();

    this.textEntriesStoreFacadeService.loadTextEntries();
  }
}
