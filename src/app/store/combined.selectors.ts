import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

import {getAchievements, getEvents} from './about-me/about-me.selectors';
import {getLinks, getTextEntries} from './content/content.selectors';
import {getAboutMePage, getContactPage, getContentPage, getHomePage, getInfoPage} from './page/page.selectors';
import {getQuotes} from './quote/quote.selectors';

export const isAppInitialized = createSelectorFactory(defaultMemoize)(
  getHomePage,
  getContentPage,
  getAboutMePage,
  getContactPage,
  getInfoPage,
  getQuotes,
  getTextEntries,
  getLinks,
  getEvents,
  getAchievements,
  (homePage, contentPage, aboutMePage, contactPage, infoPage, quotes, textEntries, links, event, achievements) =>
    Boolean(homePage && contentPage && aboutMePage && contactPage && infoPage && quotes && textEntries && links && event && achievements),
);
