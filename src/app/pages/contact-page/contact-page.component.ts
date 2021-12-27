import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {ContactPage} from '../../model/pages/contact-page.interface';
import {getContactPage} from '../../store/page/page.selectors';

@Component({
  selector: 'anselm-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactPage: Observable<ContactPage>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.contactPage = this.store.select(getContactPage);
  }
}
