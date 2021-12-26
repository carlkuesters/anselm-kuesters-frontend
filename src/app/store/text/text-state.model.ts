import {EntityState} from '@ngrx/entity';

import {ApiResponse} from '../../model/api-response.interface';
import {Text} from '../../model/text.interface';

export interface TextState extends EntityState<ApiResponse<Text>> { }
