import {ApiResponse} from '../../model/api-response.interface';
import {TextEntry} from '../../model/text-entry.interface';
import {Link} from '../../model/link.interface';

export interface ContentState {
  readonly responseTextEntries: ApiResponse<TextEntry[]>;
  readonly responseLinks: ApiResponse<Link[]>;
}
