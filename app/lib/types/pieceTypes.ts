import * as Types from './index';

export type PieceVariant = 'Bishop' | 'King' | 'Knight' | 'Pawn' | 'Queen' | 'Rook';

export type PieceId = {
    'Bishop': '1' | '2', 'King': '1', 'Knight': '1' | '2',
    'Pawn': '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8', 
    'Queen': '1', 'Rook': '1' | '2'
};

export type PieceData = { 
    readonly type: PieceVariant, readonly color: Types.Color, 
    file: Types.File, rank: Types.Rank, isDeposed: boolean 
};

export type Piece<P extends PieceVariant> = { 
    [ key in `${Types.Color}${P}${PieceId[P]}` ] : PieceData 
};

