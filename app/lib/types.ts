export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type Files = { readonly [ key in File] : { isHovered: boolean }; };
export type Ranks = { readonly [ key in Rank] : { isHovered: boolean }; };

export type CellColor = 'White' | 'Black';
export type Cell = { readonly file : File, readonly rank : Rank };
export type Cells = { [ key in `${File}${Rank}` ] : { isHovered: boolean, readonly color: CellColor } };

export type PieceVariant = 'Bishop' | 'King' | 'Knight' | 'Pawn' | 'Queen' | 'Rook';
export type PieceVariants = { readonly [ key in PieceVariant ] : string };
export type PiceColors = {} & CellColor;
export type PieceQuantity = { readonly [ key in PieceVariant ] : number };
export type PieceData = { readonly type: PieceVariant, file: File, rank: Rank, isDeposed: boolean };

export type DefaultPositions = { [ key in PieceVariant ] : File[] };
export type Pieces = { [ key in `${PiceColors}${PieceVariant}${number}` ] : PieceData };
