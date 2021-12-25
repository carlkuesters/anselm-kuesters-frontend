import {EntityState} from '@ngrx/entity';

import {ApiResponse} from '../../model/api-response';
import {Text} from '../../model/text';

export interface TextState extends EntityState<ApiResponse<Text>> { }
