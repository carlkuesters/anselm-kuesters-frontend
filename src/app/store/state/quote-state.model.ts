import {ApiResponse} from '../../model/api-response';
import {Quote} from '../../model/quote';

export interface QuoteState {
  readonly responseQuotes: ApiResponse<Quote[]>;
}
