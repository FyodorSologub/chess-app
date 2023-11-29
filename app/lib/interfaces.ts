export type CellXCor = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type CellYCor = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export interface Cell {
    readonly xCor: CellXCor;
    readonly yCor: CellYCor;
};

export type Ranks = { [xCor in CellXCor]: { isHovered: boolean }; };
export type Files = { [yCor in CellYCor]: { isHovered: boolean }; };
export type Cells = { [key in `${CellYCor}${CellXCor}`]: { isHovered: boolean }; };

// перенести 
export enum PiecesVariants {
    Bishop = 'bishop',
    King = 'king',
    Knight = 'knight',
    Pawn = 'pawn',
    Queen = 'queen',
    Rook = 'rook',
};

// перенести 
export enum PiecesColors {
    white = 'white',
    black = 'black'
};

// перенести 
export interface PiecesIds {
    Pawn: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8',
    Rook: '1' | '2',
    Knight: '1' | '2',
    Bishop: '1' | '2',
    Queen: '1' | '2',
    King: '1' | '2',
};


// переписать 

export type PieceData = { xCor : CellXCor, yCor: CellYCor, isDeposed: boolean, pieceType: PiecesVariants };

export type PawnWhite = { [key in `${PiecesVariants.Pawn}${PiecesColors.white}${PiecesIds['Pawn']}`]: PieceData; };
export type PawnBlack = { [key in `${PiecesVariants.Pawn}${PiecesColors.black}${PiecesIds['Pawn']}`]: PieceData; };

export type RookWhite = { [key in `${PiecesVariants.King}${PiecesColors.white}${PiecesIds['King']}`]: PieceData; };
export type RookBlack = { [key in `${PiecesVariants.King}${PiecesColors.black}${PiecesIds['King']}`]: PieceData; };

export type KnightWhite = { [key in `${PiecesVariants.Knight}${PiecesColors.white}${PiecesIds['Knight']}`]: PieceData; };
export type KnightBlack = { [key in `${PiecesVariants.Knight}${PiecesColors.black}${PiecesIds['Knight']}`]: PieceData; };

export type BishopWhite = { [key in `${PiecesVariants.Bishop}${PiecesColors.white}${PiecesIds['Bishop']}`]: PieceData; };
export type BishopBlack = { [key in `${PiecesVariants.Bishop}${PiecesColors.black}${PiecesIds['Bishop']}`]: PieceData; };

export type QueenWhite = { [key in `${PiecesVariants.Queen}${PiecesColors.white}${PiecesIds['Queen']}`]: PieceData; };
export type QueenBlack = { [key in `${PiecesVariants.Queen}${PiecesColors.black}${PiecesIds['Queen']}`]: PieceData; };

export type KingWhite = { [key in `${PiecesVariants.Pawn}${PiecesColors.white}${PiecesIds['Pawn']}`]: PieceData; };
export type KingBlack = { [key in `${PiecesVariants.Pawn}${PiecesColors.white}${PiecesIds['Pawn']}`]: PieceData; };


// переписать

export interface Pieces {
    PawnsWhite: PawnWhite,
    PawnsBlack: PawnBlack,
    RooksWhite: RookWhite,
    RooksBlack: RookBlack,
    KnightsWhite: KnightWhite,
    KnightsBlack: KnightBlack,
    BishopsWhite: BishopWhite,
    BishopsBlack: BishopBlack,
    QueensWhite: QueenWhite,
    QueensBlack: QueenBlack,
    KingsWhite: KingWhite,
    KingsBlack: KingBlack,
};