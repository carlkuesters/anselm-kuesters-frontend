import {ApiResponse} from '../../model/api-response';
import {TextEntry} from '../../model/text-entry';
import {Link} from '../../model/link';

export interface ContentState {
  readonly responseTextEntries: ApiResponse<TextEntry[]>;
  readonly responseLinks: ApiResponse<Link[]>;
}
