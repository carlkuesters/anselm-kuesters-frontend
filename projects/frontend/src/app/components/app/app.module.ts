import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from '../layout/layout.module';
import { ItemsModule } from '../items/items.module';
import { PagesModule } from '../pages/pages.module';

import { BackendInformationService } from '../../services/backendInformation.service';

// TODO: Remove
import { DashboardComponent } from '../../dashboard.component';
import { HeroesComponent } from '../../heroes.component';
import { HeroDetailComponent } from '../../hero-detail.component';
import { HeroSearchComponent } from '../../hero-search.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    AppRoutingModule,
    LayoutModule,
    ItemsModule,
    PagesModule,
  ],
  declarations: [
    AppComponent,

    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: [
    BackendInformationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
