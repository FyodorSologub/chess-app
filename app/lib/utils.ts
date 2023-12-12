import { Rank, File, Color, PieceVariant } from "./types";

export const range = (n: number, start = 0) : number[] => [...Array(n).keys()].map(el => el + start);
export const getUpperLetter = (l : number) : string => String.fromCharCode(65 + l).toUpperCase();

export const getCellColor = (file : File, rank : Rank) : Color => 
     (Number(rank) % 2 + (file.charCodeAt(0)-64) % 2) % 2 === 0 ? 'White' : 'Black';
     
export const getCellColorClasses = (color: Color) : string => 
     color === 'White' ? 'bg-piecesLight-custom' : 'bg-piecesDark-custom';

// export const sortCells = ( a : string, b : string ) : 

// Оставить?
/*
export const getRank = (color: Color, variant : PieceVariant) : Rank => {
     return color === 'White' && variant === 'Pawn' ? '2'
     : color === 'White' && variant !== 'Pawn' ? '1'
     : color === 'Black' && variant === 'Pawn' ? '7'
     : '8'
};
*/