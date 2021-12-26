import {TextSource} from '../../model/text-scraping/text-source.interface';
import {TextWordAnalysis} from '../../model/text-scraping/text-word-analysis.interface';

export interface TextScrapingState {
  readonly textSources: TextSource[];
  readonly enabledTextSourceIds: number[];
  readonly trendlineEnabled: boolean;
  readonly word: string;
  readonly textWordAnalyses: TextWordAnalysis[];
}
