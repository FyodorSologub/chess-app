import { Rank, File, Color, PieceVariant, Cell, Cells } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";

export const range = ( n: number, start = 0 ) : number[] => [...Array(n).keys()].map(el => el + start);
export const getUpperLetter = ( l : number ) : string => String.fromCharCode(65 + l).toUpperCase();

export const getCellColor = ( file : File, rank : Rank ) : Color => 
     (Number(rank) % 2 + (file.charCodeAt(0)-64) % 2) % 2 === 0 ? 'White' : 'Black';
     
export const getCellColorClasses = ( color: Color ) : string => 
     color === 'White' ? 'bg-piecesLight-custom' : 'bg-piecesDark-custom';

export const getPawnMoves = <P extends PieceVariant>( position : Cell, piece: PieceVariant, color: Color, cells: Cells<P> ) : Cell[] | null => {
    //console.log(position, piece, color, color, cells)
     const legitPosition =  Number(position.rank) < 8 && color === 'White'
     ? {file: position.file, rank: String(Number(position.rank)+1) } as Cell 
     : Number(position.rank) > 1 && color === 'Black' 
          ? {file: position.file, rank: String(Number(position.rank)-1) } as Cell
          : null
     
     if (legitPosition !== null) {
          if (cells[`${legitPosition.file as File}${legitPosition?.rank as Rank}`].hasPiece === false) {
               return [legitPosition];
          }
     } return null;
};

export const getQueenMoves = <P extends PieceVariant>( initialPosition : Cell, cells : Cells<P> ) : Cell[] | null => {
     const result : Cell[] = [];

     // horizontal
     for (let i = FILE_VALUES.indexOf(initialPosition.file); i < FILE_VALUES.length; i++) { 
          if(`${FILE_VALUES[i]}${initialPosition.rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${FILE_VALUES[i]}${initialPosition.rank}`].hasPiece === false ) {
                    result.push({ file: FILE_VALUES[i], rank: initialPosition.rank });
               } else {
                    break;
               }
          };
     };
     for (let i = FILE_VALUES.indexOf(initialPosition.file); i >= 0; i--) { 
          if(`${FILE_VALUES[i]}${initialPosition.rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${FILE_VALUES[i]}${initialPosition.rank}`].hasPiece === false ) {
                    result.push({ file: FILE_VALUES[i], rank: initialPosition.rank });
               } else {
                    break;
               }
          };
     };

     // vertical
     for (let i = RANK_VALUES.indexOf(initialPosition.rank); i < RANK_VALUES.length; i++) { 
          if(`${initialPosition.file}${RANK_VALUES[i]}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${initialPosition.file}${RANK_VALUES[i]}`].hasPiece === false ) {
                    result.push({ file: initialPosition.file, rank: RANK_VALUES[i] });
               } else {
                    break;
               }
          };
     };
     for (let i = RANK_VALUES.indexOf(initialPosition.rank); i >= 0; i--) { 
          if(`${initialPosition.file}${RANK_VALUES[i]}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${initialPosition.file}${RANK_VALUES[i]}`].hasPiece === false ) {
                    result.push({ file: initialPosition.file, rank: RANK_VALUES[i] });
               } else {
                    break;
               }
          };
     };

     // diagonal
     for(let i = FILE_VALUES.indexOf(initialPosition.file); i < FILE_VALUES.length; i++) {
          if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].hasPiece === false ) {
                    result.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank });
               } else {
                    break;
               }
          };
     };
     for(let i = FILE_VALUES.indexOf(initialPosition.file); i >= 0; i--) {
          if(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i) >= 1) {
               if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
                    if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].hasPiece === false) {
                         result.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank })
                    } else {
                         break;
                    }
               }
          }
     };

     for(let i = FILE_VALUES.indexOf(initialPosition.file); i >= 0; i--) {
          if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].hasPiece === false ) {
                    result.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank});
               } else {
                    break;
               }
          };
     };
     for(let i = FILE_VALUES.indexOf(initialPosition.file); i < FILE_VALUES.length; i++) {
          if(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file)) >= 1) {
               if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
                    if( cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].hasPiece === false ) {
                         result.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank});
                    } else {
                         break;
                    }
               };
          };
     };

     return result.length > 0 ? result : null;
};