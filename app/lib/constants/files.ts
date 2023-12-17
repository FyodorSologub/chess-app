import * as Types from '@/app/lib/types/index';
import * as Constants from './index';

export const FILE_VALUES: Types.File[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const FILES_DEFAULT = Object.fromEntries(
    FILE_VALUES.map(file => [file as Types.File, { isHovered: false }])
) as Types.Files;