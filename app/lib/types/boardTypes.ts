import * as Types from './index';

export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type Files = { readonly [ key in File ] : { isHovered: boolean }; };
export type Ranks = { readonly [ key in Rank ] : { isHovered: boolean }; };

export type Cell = { readonly file : File, readonly rank : Rank };
export type Color = 'White' | 'Black';

export type FileOffset = { [ key in Types.PieceVariant ] : File[]  };
export type RankOffset = { [ key in Color | `${Color}Pawn` ] : Rank };

export type CellData<P extends Types.PieceVariant> = {
    readonly color: Color, 
    isHovered: boolean, isSelected: boolean, 
    legitPlaceToMove: boolean, legitPlaceToAttack: boolean,
    hasPiece: boolean, showMove: boolean,
    piece?: Types.PieceVariant, pieceColor?: Color, pieceId?: Types.PieceId[P],
};

export type Cells<P extends Types.PieceVariant> = { [ key in `${File}${Rank}` ] : CellData<P> };