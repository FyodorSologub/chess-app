export const range = (n: number, start = 0) : number[] => Array.from({length: n}, (_, i) => i + start);

export enum Rank {
    '1_' = '1',
    '2_' = '2',
    '3_' = '3',
    '4_' = '4',
    '5_' = '5',
    '6_' = '6',
    '7_' = '7',
    '8_' = '8',
};

export enum File {
    'A' = 'A',
    'B' = 'B',
    'C' = 'C',
    'D' = 'D',
    'E' = 'E',
    'F' = 'F',
    'G' = 'G',
    'H' = 'H',
};

export type PieceVariants = {
    Bishop: 'Bishop',
    King: 'King',
    Knight: 'Knight',
    Pawn: 'Pawn',
    Queen: 'Queen',
    Rook: 'Rook',
};

export type PieceIds = {
    BishopID: '1' | '2',
    KingID: '1' | '2',
    KnightID: '1' | '2',
    PawnID: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8',
    QueenID: '1' | '2',
    RookID: '1' | '2',
};

export type PiecesColors = {
    White: 'White',
    Black: 'Black'
};

export type PieceData = { 
    type: PieceVariants;
    rank: Rank; 
    file: File; 
    isDeposed: boolean; 
};

export type Pieces = 
    { [key in `${PieceVariants['Bishop']}${keyof PiecesColors}${PieceIds['BishopID']}`]: PieceData; } 
    & 
    { [key in `${PieceVariants['King']}${keyof PiecesColors}${PieceIds['KingID']}`]: PieceData; } 
    & 
    { [key in `${PieceVariants['Knight']}${keyof PiecesColors}${PieceIds['PawnID']}`]: PieceData; } 
    & 
    { [key in `${PieceVariants['Pawn']}${keyof PiecesColors}${PieceIds['PawnID']}`]: PieceData; } 
    & 
    { [key in `${PieceVariants['Queen']}${keyof PiecesColors}${PieceIds['QueenID']}`]: PieceData; } 
    & 
    { [key in `${PieceVariants['Rook']}${keyof PiecesColors}${PieceIds['RookID']}`]: PieceData; } 

export type CoordinatesData = { isHovered: boolean };
export type CellsData = { isHovered: boolean; hasPiece: boolean; pieceId: string };

export type Ranks = { [rank in Rank]: CoordinatesData };
export type Files = { [file in File]: CoordinatesData };
export type Cells = { [key in `${File}${Rank}`]: CellsData };