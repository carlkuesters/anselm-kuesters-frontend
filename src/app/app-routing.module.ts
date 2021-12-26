import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';
import {ContentPageComponent} from './pages/content-page/content-page.component';
import {TextPageComponent} from './pages/text-page/text-page.component';
import {AboutMePageComponent} from './pages/about-me-page/about-me-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {InfoPageComponent} from './pages/info-page/info-page.component';
import {TextScrapingPageComponent} from './pages/text-scraping-page/text-scraping-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'inhalte', component: ContentPageComponent },
  { path: 'text/:seoTextId', component: TextPageComponent },
  { path: 'ueber-mich', component: AboutMePageComponent },
  { path: 'kontakt', component: ContactPageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'textscraping', component: TextScrapingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
