import {AboutMePage} from '../../model/pages/about-me-page.interface';
import {ContentPage} from '../../model/pages/content-page.interface';
import {ContactPage} from '../../model/pages/contact-page.interface';
import {HomePage} from '../../model/pages/home-page.interface';
import {InfoPage} from '../../model/pages/info-page.interface';
import {ApiResponse} from '../../model/api-response.interface';

export interface PageState {
  readonly responseHomePage: ApiResponse<HomePage>;
  readonly responseContentPage: ApiResponse<ContentPage>;
  readonly responseAboutMePage: ApiResponse<AboutMePage>;
  readonly responseContactPage: ApiResponse<ContactPage>;
  readonly responseInfoPage: ApiResponse<InfoPage>;
}
