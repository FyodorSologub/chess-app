export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type Files = { readonly [ key in File ] : { isHovered: boolean }; };
export type Ranks = { readonly [ key in Rank ] : { isHovered: boolean }; };

export type Cell = { readonly file : File, readonly rank : Rank };
export type Color = 'White' | 'Black';

export type PieceVariant = 'Bishop' | 'King' | 'Knight' | 'Pawn' | 'Queen' | 'Rook';

export type FileOffset = { [ key in PieceVariant ] : File[]  };
export type RankOffset = { [ key in Color | `${Color}Pawn` ] : Rank };
export type DefaultPositions<T extends PieceVariant> = { 
    [ key in `${Color}${T}${PieceId[T]}` ] : Cell & { color: Color, type: T, id: PieceId[T] } 
};

export type PieceData = { readonly type: PieceVariant, color: Color, file: File, rank: Rank, isDeposed: boolean };
export type PieceId = {
    'Bishop': '1' | '2', 'King': '1', 'Knight': '1' | '2',
    'Pawn': '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8', 
    'Queen': '1', 'Rook': '1' | '2'
};
export type Piece<T extends PieceVariant> = { 
    [ key in `${Color}${T}${PieceId[T]}` ] : PieceData 
};

export type CellData = { 
    isHovered: boolean, piece: PieceVariant | null, 
    pieceColor: Color | null, readonly color: Color,
    pieceId: string | null, 
};
export type Cells = { [ key in `${File}${Rank}` ] : CellData };