export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type Files = { readonly [ key in File ] : { isHovered: boolean }; };
export type Ranks = { readonly [ key in Rank ] : { isHovered: boolean }; };

export type CellColor = 'White' | 'Black';
export type Cell = { readonly file : File, readonly rank : Rank };
export type CellData = { isHovered: boolean, piece: PieceVariant | null, pieceColor: PiceColors | null, readonly color: CellColor };
export type Cells = { [ key in `${File}${Rank}` ] : CellData };

export type PieceVariant = 'Bishop' | 'King' | 'Knight' | 'Pawn' | 'Queen' | 'Rook';
export type PieceVariants = { readonly [ key in PieceVariant ] : string };
export type PiceColors = {} & CellColor;
export type PieceQuantity = { readonly [ key in PieceVariant ] : number };
export type PieceData = { readonly type: PieceVariant, color: PiceColors, file: File, rank: Rank, isDeposed: boolean };

export type DefaultPositions = { [ key in PieceVariant ] : File[] };
export type Pieces = { [ key in `${PiceColors}${PieceVariant}${number}` ] : PieceData };
