import {Component, Input, OnChanges} from '@angular/core';

import { Text } from '../../classes/text';
import { TextsOfYear } from '../../classes/textsOfYear';

@Component({
  selector: 'texts-component',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnChanges {
  @Input() texts: Text[];
  textsByYear: TextsOfYear[];

  ngOnChanges() {
    console.log(this.texts);
    let texts: Text[] = [
      <Text>{id: 1, title: 'Test 1', content: 'Lorem Ipsum', date: 123345},
      <Text>{id: 42, title: '4289312 Juhuu', content: 'Kappa', date: 9676231},
      <Text>{id: 43, title: 'Dasdasd das', content: '13231231231231', date: 9676234},
      <Text>{id: 44, title: '123 1232 1312', content: 'sd asda s', date: 9676800},
      <Text>{id: 88, title: 'Super old', content: 'I am old', date: 502},
    ];
    this.textsByYear = [
      {
        year: 2017,
        texts: [
          texts[0],
          texts[1],
        ],
      },
      {
        year: 2016,
        texts: [
          texts[2],
          texts[3],
        ],
      },
      {
        year: 2014,
        texts: [
          texts[4],
        ],
      },
    ];
  }
}
