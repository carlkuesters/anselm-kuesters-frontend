import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {TextView} from '../../model/text-view';
import * as TextActions from '../../store/text/text.actions';
import {getTextView} from '../../store/text/text.selectors';

@Component({
  selector: 'anselm-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.scss']
})
export class TextPageComponent implements OnInit, AfterViewInit {

  text: Observable<TextView>;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store) {
  }

  ngOnInit(): void {
    const seoId = this.activatedRoute.snapshot.paramMap.get('seoTextId');
    this.text = this.store.select(getTextView, { seoId });
    this.store.dispatch(TextActions.loadText({ seoId }));
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
