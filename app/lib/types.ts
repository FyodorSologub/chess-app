export type Cell = {
    rank: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    file: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
};

export type PiecesVariants = {
    Bishop: 'Bishop',
    King: 'King',
    Knight: 'Knight',
    Pawn: 'Pawn',
    Queen: 'Queen',
    Rook: 'Rook',
};

export type PiecesColors = {
    White: 'White',
    Black: 'Black'
};

export type PiecesIds = {
    Pawn: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8',
    Rook: '1' | '2',
    Knight: '1' | '2',
    Bishop: '1' | '2',
    Queen: '1' | '2',
    King: '1' | '2',
};

export type PieceData = { 
    rank : Cell['rank'], 
    file: Cell['file'], 
    isDeposed: boolean, 
    pieceType: PiecesVariants 
};

export type CoordinatesData = { isHovered: boolean };
export type CellsData = { isHovered: boolean; hasPiece: boolean; pieceId: string };

export type Ranks = { [rank in Cell['rank']]: CoordinatesData };
export type Files = { [file in Cell['file']]: CoordinatesData };
export type Cells = { [key in `${Cell['file']}${Cell['rank']}`]: CellsData };
