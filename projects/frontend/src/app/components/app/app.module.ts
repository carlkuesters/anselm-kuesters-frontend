import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from '../layout/layout.module';
import { ItemsModule } from '../items/items.module';
import { PagesModule } from '../pages/pages.module';

// TODO: Remove
import { HeroService } from '../../hero.service';
import { DashboardComponent } from '../../dashboard.component';
import { HeroesComponent } from '../../heroes.component';
import { HeroDetailComponent } from '../../hero-detail.component';
import { HeroSearchComponent } from '../../hero-search.component';

import { InMemoryWebApiModule, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LayoutModule,
    ItemsModule,
    PagesModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, <InMemoryBackendConfigArgs>{delay: 600})
  ],
  declarations: [
    AppComponent,

    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
