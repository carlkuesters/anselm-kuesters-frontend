import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/homePage/homePage.component';
import { TextsPageComponent } from '../pages/textsPage/textsPage.component';
import { TextPageComponent } from '../pages/textPage/textPage.component';
import { AboutMePageComponent } from '../pages/aboutMePage/aboutMePage.component';
import { ContactPageComponent } from '../pages/contactPage/contactPage.component';
import { InfoPageComponent } from '../pages/infoPage/infoPage.component';

import { DashboardComponent } from '../../dashboard.component';
import { HeroesComponent } from '../../heroes.component';
import { HeroDetailComponent } from '../../hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'texts', component: TextsPageComponent },
  { path: 'texts/:seoTextId', component: TextPageComponent },
  { path: 'about-me', component: AboutMePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'info', component: InfoPageComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
