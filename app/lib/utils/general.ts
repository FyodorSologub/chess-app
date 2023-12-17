import { Rank, File, Color, PieceVariant, Cell, Cells } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";

export const range = ( n: number, start = 0 ) : number[] => [...Array(n).keys()].map(el => el + start);
export const getUpperLetter = ( l : number ) : string => String.fromCharCode(65 + l).toUpperCase();

export const getCellColor = ( file : File, rank : Rank ) : Color => 
     (Number(rank) % 2 + (file.charCodeAt(0)-64) % 2) % 2 === 0 ? 'White' : 'Black';
     
export const getCellColorClasses = ( color: Color ) : string => 
     color === 'White' ? 'bg-piecesLight-custom' : 'bg-piecesDark-custom';