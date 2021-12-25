import {ApiResponse} from '../../model/api-response';
import {TextEntry} from '../../model/text-entry';

export interface TextEntriesState {
  readonly responseTextEntries: ApiResponse<TextEntry[]>;
}
