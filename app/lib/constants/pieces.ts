import { PieceVariant, PieceId, Piece, Color } from '@/app/lib/types/index';
import { COLOR_VALUES } from './index';
import { range } from '@/app/lib/utils/index';

export const PIECE_VARIANT_VALUES: PieceVariant[] = [
    'Bishop', 'King', 'Knight', 'Pawn', 'Queen', 'Rook'
];
  
export const PIECE_ID_VALUES: PieceId = {
    'Bishop': '2',
    'King': '1',
    'Knight': '2',
    'Pawn': '8',
    'Queen': '1',
    'Rook': '2',
};

export const PIECES_DEFAULT = Object.fromEntries(
    COLOR_VALUES.flatMap(color =>
        PIECE_VARIANT_VALUES.flatMap(variant =>
            range(Number(PIECE_ID_VALUES[variant]), 1).map(id =>
                [ `${color}${variant}${String(id)}` as `${Color}${PieceVariant}${PieceId[PieceVariant]}`, 
                  { type: variant, color: color, moveNum: 1, isDeposed: false },
                ]
            )
        )
    )
) as Piece<PieceVariant>;