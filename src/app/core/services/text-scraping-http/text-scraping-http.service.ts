import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {TextSource} from '../../../model/text-scraping/text-source.interface';
import {TextWordAnalysis} from '../../../model/text-scraping/text-word-analysis.interface';

@Injectable({
  providedIn: 'root'
})
export class TextScrapingHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getTextSources(): Observable<TextSource[]> {
    return this.httpClient.get<TextSource[]>('/api_custom/textscraping/text_sources.php');
  }

  getWordAnalyses(word: string, textSourceIds: number[]): Observable<TextWordAnalysis[]> {
    let params = new HttpParams();
    params = params.append('word', word);
    params = params.append('textSourceIds', textSourceIds.join(','));

    return this.httpClient.get<TextWordAnalysis[]>('/api_custom/textscraping/index.php', { params });
  }
}
