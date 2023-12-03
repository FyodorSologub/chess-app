import { Rank, File, CellColor, PieceVariant } from "./types";

export const range = (n: number, start = 0) : number[] => [...Array(n).keys()].map(el => el + start);
export const getUpperLetter = (l : number) : string => String.fromCharCode(65 + l).toUpperCase();

export const getCellColor = (file : File, rank : Rank) : CellColor => 
     (Number(rank) % 2 + (file.charCodeAt(0)-64) % 2) % 2 === 0 ? 'White' : 'Black';
     
export const getCellColorClasses = (color: CellColor) : string => 
     color === 'White' ? 'bg-piecesLight-custom' : 'bg-piecesDark-custom';

export const getRank = (color: CellColor, variant : PieceVariant) : Rank => {
     return color === 'White' && variant === 'Pawn' ? '2'
     : color === 'White' && variant !== 'Pawn' ? '1'
     : color === 'Black' && variant === 'Pawn' ? '7'
     : '8'
};