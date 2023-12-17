import * as Types from '@/app/lib/types/index';
import * as Constants from './index';

export const RANK_VALUES: Types.Rank[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const RANKS_DEFAULT = Object.fromEntries(
  RANK_VALUES.map(rank => [rank as Types.Rank, { isHovered: false }])
) as Types.Ranks;