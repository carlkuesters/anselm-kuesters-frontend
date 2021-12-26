import {ApiResponse} from '../../model/api-response.interface';
import {Quote} from '../../model/quote.interface';

export interface QuoteState {
  readonly responseQuotes: ApiResponse<Quote[]>;
}
