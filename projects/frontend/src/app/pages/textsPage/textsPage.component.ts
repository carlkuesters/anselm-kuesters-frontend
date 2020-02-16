import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {TextEntriesStoreFacadeService} from '../../core/services/text-entries-store-facade/text-entries-store-facade.service';
import {DisplayedTextEntry} from '../../model/displayed-text-entry';

@Component({
  selector: 'anselm-texts-page',
  templateUrl: './textsPage.component.html',
  styleUrls: ['./textsPage.component.scss']
})
export class TextsPageComponent implements OnInit {
  textEntries: Observable<DisplayedTextEntry[]>;

  constructor(private textEntriesStoreFacadeService: TextEntriesStoreFacadeService) {
  }

  ngOnInit(): void {
    this.textEntries = this.textEntriesStoreFacadeService.getDisplayedTextEntries();

    this.textEntriesStoreFacadeService.loadTextEntries();
  }
}
