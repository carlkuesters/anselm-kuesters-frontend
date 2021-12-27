import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {InfoPage} from '../../model/pages/info-page.interface';
import {getInfoPage} from '../../store/page/page.selectors';

@Component({
  selector: 'anselm-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  infoPage: Observable<InfoPage>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.infoPage = this.store.select(getInfoPage);
  }
}
