import {createAction, props} from '@ngrx/store';

import {TextSource} from '../../model/text-scraping/text-source.interface';
import {TextWordAnalysis} from '../../model/text-scraping/text-word-analysis.interface';

// tslint:disable:max-line-length
export const loadTextSources = createAction('[Textscraping] Load text sources');
export const textSourcesLoaded = createAction('[Textscraping] Text sources loaded', props<{ textSources: TextSource[] }>());
export const configureTextSource = createAction('[Textscraping] Configure text source', props<{ textSourceId: number, enabled: boolean }>());
export const configureTrendline = createAction('[Textscraping] Configure trendline', props<{ enabled: boolean }>());
export const setWord = createAction('[Textscraping] Set word', props<{ word: string }>());
export const loadTextWordAnalysis = createAction('[Textscraping] Load text word analysis');
export const textWordAnalysesLoaded = createAction('[Textscraping] Text word analyses loaded', props<{ textWordAnalyses: TextWordAnalysis[] }>());
