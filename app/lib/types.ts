import { range } from "./utils";

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

export type PiecesIds = {
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
    rank : Cell['rank'], 
    file: Cell['file'], 
    isDeposed: boolean, 
    pieceType: PiecesVariants 
};

export type CoordinatesData = { isHovered: boolean };
export type CellsData = { isHovered: boolean; hasPiece: boolean; pieceId: string };

export type PawnsWhite = { [key in `${PiecesVariants['Pawn']}${PiecesColors['White']}${PiecesIds['PawnID']}`]: PieceData; };
export type PawnsBlack = { [key in `${PiecesVariants['Pawn']}${PiecesColors['Black']}${PiecesIds['PawnID']}`]: PieceData; };

export type RooksWhite = { [key in `${PiecesVariants['King']}${PiecesColors['White']}${PiecesIds['KingID']}`]: PieceData; };
export type RooksBlack = { [key in `${PiecesVariants['King']}${PiecesColors['Black']}${PiecesIds['KingID']}`]: PieceData; };

export type KnightsWhite = { [key in `${PiecesVariants['Knight']}${PiecesColors['White']}${PiecesIds['KnightID']}`]: PieceData; };
export type KnightsBlack = { [key in `${PiecesVariants['Knight']}${PiecesColors['Black']}${PiecesIds['KnightID']}`]: PieceData; };

export type BishopsWhite = { [key in `${PiecesVariants['Bishop']}${PiecesColors['White']}${PiecesIds['BishopID']}`]: PieceData; };
export type BishopsBlack = { [key in `${PiecesVariants['Bishop']}${PiecesColors['Black']}${PiecesIds['BishopID']}`]: PieceData; };

export type QueensWhite = { [key in `${PiecesVariants['Queen']}${PiecesColors['White']}${PiecesIds['QueenID']}`]: PieceData; };
export type QueensBlack = { [key in `${PiecesVariants['Queen']}${PiecesColors['Black']}${PiecesIds['QueenID']}`]: PieceData; };

export type KingsWhite = { [key in `${PiecesVariants['Pawn']}${PiecesColors['White']}${PiecesIds['PawnID']}`]: PieceData; };
export type KingsBlack = { [key in `${PiecesVariants['Pawn']}${PiecesColors['Black']}${PiecesIds['PawnID']}`]: PieceData; };

// rewrite
const pawnsWhite = Object.fromEntries(range(8,1).map(key => [`PawnWhite${key}`])) as PawnsWhite;
console.log(pawnsWhite);

export type Pieces = {
    PawnsWhite: PawnsWhite,
    PawnsBlack: PawnsBlack,
    RooksWhite: RooksWhite,
    RooksBlack: RooksBlack,
    KnightsWhite: KnightsWhite,
    KnightsBlack: KnightsBlack,
    BishopsWhite: BishopsWhite,
    BishopsBlack: BishopsBlack,
    QueensWhite: QueensWhite,
    QueensBlack: QueensBlack,
    KingsWhite: KingsWhite,
    KingsBlack: KingsBlack,
};

export type Ranks = { [rank in Cell['rank']]: CoordinatesData };
export type Files = { [file in Cell['file']]: CoordinatesData };
export type Cells = { [key in `${Cell['file']}${Cell['rank']}`]: CellsData };