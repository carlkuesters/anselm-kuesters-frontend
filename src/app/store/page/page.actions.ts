import {createAction, props} from '@ngrx/store';

import {AboutMePage} from '../../model/pages/about-me-page.interface';
import {ContentPage} from '../../model/pages/content-page.interface';
import {ContactPage} from '../../model/pages/contact-page.interface';
import {HomePage} from '../../model/pages/home-page.interface';
import {InfoPage} from '../../model/pages/info-page.interface';
import {ApiResponse} from '../../model/api-response.interface';

export const loadPages = createAction('[Pages] Load pages');
export const homePageLoaded = createAction('[Pages] Home page loaded', props<{ responseHomePage: ApiResponse<HomePage> }>());
export const contentPageLoaded = createAction('[Pages] Content page loaded', props<{ responseContentPage: ApiResponse<ContentPage> }>());
export const aboutMePageLoaded = createAction('[Pages] AboutMe page loaded', props<{ responseAboutMePage: ApiResponse<AboutMePage> }>());
export const contactPageLoaded = createAction('[Pages] Contact page loaded', props<{ responseContactPage: ApiResponse<ContactPage> }>());
export const infoPageLoaded = createAction('[Pages] Info page loaded', props<{ responseInfoPage: ApiResponse<InfoPage> }>());
