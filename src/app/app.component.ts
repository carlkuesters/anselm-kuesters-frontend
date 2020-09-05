import {Component} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'anselm-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('de');
    translateService.use('de');
  }
}
