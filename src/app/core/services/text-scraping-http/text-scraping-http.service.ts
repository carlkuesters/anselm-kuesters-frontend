import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {TextSource} from '../../../model/text-scraping/text-source';
import {TextWordAnalysis} from '../../../model/text-scraping/text-word-analysis';

@Injectable()
export class TextScrapingHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getTextSources(): Observable<TextSource[]> {
    return this.httpClient.get<TextSource[]>('/api/textscraping/text_sources.php');
  }

  getWordAnalyses(word: string, textSourceIds: number[]): Observable<TextWordAnalysis[]> {
    let params = new HttpParams();
    params = params.append('word', word);
    params = params.append('textSourceIds', textSourceIds.join(','));

    return this.httpClient.get<TextWordAnalysis[]>('/api/textscraping/index.php', { params });
  }
}
