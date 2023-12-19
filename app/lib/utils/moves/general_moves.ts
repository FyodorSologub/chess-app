import { Rank, File, Color, PieceVariant, Cell, Cells, possibleMoves } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";

export const getHorizontalMoves = <P extends PieceVariant>(initialPosition : Cell, cells : Cells<P>) : possibleMoves => {
    const moves : Cell[] = [];
    const movesToAttack : Cell[] = [];

    for (let i = FILE_VALUES.indexOf(initialPosition.file); i < FILE_VALUES.length; i++) { 
         if(`${FILE_VALUES[i]}${initialPosition.rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
              if( cells[`${FILE_VALUES[i]}${initialPosition.rank}`].hasPiece === false ) {
                moves.push({ file: FILE_VALUES[i], rank: initialPosition.rank });
              } else {
                    if(cells[`${FILE_VALUES[i]}${initialPosition.rank}`].hasPiece === true && cells[`${FILE_VALUES[i]}${initialPosition.rank}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                         movesToAttack.push({ file: FILE_VALUES[i], rank: initialPosition.rank });
                    };
                    break;
              }
         };
    };
    for (let i = FILE_VALUES.indexOf(initialPosition.file); i >= 0; i--) { 
         if(`${FILE_VALUES[i]}${initialPosition.rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
              if( cells[`${FILE_VALUES[i]}${initialPosition.rank}`].hasPiece === false ) {
                moves.push({ file: FILE_VALUES[i], rank: initialPosition.rank });
              } else {
               if(cells[`${FILE_VALUES[i]}${initialPosition.rank}`].hasPiece === true && cells[`${FILE_VALUES[i]}${initialPosition.rank}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                         movesToAttack.push({ file: FILE_VALUES[i], rank: initialPosition.rank });
                    };
                    break;
              }
         };
    };
    
    return { toMove: moves, toAttack: movesToAttack };
};

export const getVerticalMoves = <P extends PieceVariant>(initialPosition : Cell, cells : Cells<P>) : possibleMoves => {
    const moves : Cell[] = [];
    const movesToAttack : Cell[] = [];

    for (let i = RANK_VALUES.indexOf(initialPosition.rank); i < RANK_VALUES.length; i++) { 
         if(`${initialPosition.file}${RANK_VALUES[i]}` !== `${initialPosition.file}${initialPosition.rank}`) {
              if( cells[`${initialPosition.file}${RANK_VALUES[i]}`].hasPiece === false ) {
                moves.push({ file: initialPosition.file, rank: RANK_VALUES[i] });
              } else {
                    if(cells[`${initialPosition.file}${RANK_VALUES[i]}`].hasPiece === true && cells[`${initialPosition.file}${RANK_VALUES[i]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                         movesToAttack.push({ file: initialPosition.file, rank: RANK_VALUES[i] });
                    };
                    break;
              }
         };
    };

    for (let i = RANK_VALUES.indexOf(initialPosition.rank); i >= 0; i--) { 
         if(`${initialPosition.file}${RANK_VALUES[i]}` !== `${initialPosition.file}${initialPosition.rank}`) {
              if( cells[`${initialPosition.file}${RANK_VALUES[i]}`].hasPiece === false ) {
                moves.push({ file: initialPosition.file, rank: RANK_VALUES[i] });
              } else {
                    if(cells[`${initialPosition.file}${RANK_VALUES[i]}`].hasPiece === true && cells[`${initialPosition.file}${RANK_VALUES[i]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                         movesToAttack.push({ file: initialPosition.file, rank: RANK_VALUES[i] });
                    };
                    break;
              }
         };
    };
    
    return { toMove: moves, toAttack: movesToAttack };
};

export const getDiagonalMoves = <P extends PieceVariant>(initialPosition : Cell, cells : Cells<P>) : possibleMoves => {
    const moves : Cell[] = [];
    const movesToAttack : Cell[] = [];

    const initialCell = cells[`${initialPosition.file}${initialPosition.rank}`];

    for(let i = FILE_VALUES.indexOf(initialPosition.file); i < FILE_VALUES.length; i++) {
     if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank}`]) {
          if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].hasPiece === false ) {
                 moves.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank });
               } else {
                if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                     movesToAttack.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank) + (i - FILE_VALUES.indexOf(initialPosition.file))) as Rank });
                };
                break;
               }
          };
     }
         
    };
    for(let i = FILE_VALUES.indexOf(initialPosition.file); i >= 0; i--) {
     if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`]) {
          if(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i) >= 1) {
               if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
                    if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].hasPiece === false) {
                     moves.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank })
                    } else {
                          if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                               movesToAttack.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank) - (FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank });
                          };
                          break;
                    }
               }
          }
     }
    };

    for(let i = FILE_VALUES.indexOf(initialPosition.file); i >= 0; i--) {
     if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`]) {
          if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
               if( cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].hasPiece === false ) {
                 moves.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank});
               } else {
                     if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                          movesToAttack.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank)+(FILE_VALUES.indexOf(initialPosition.file)-i)) as Rank});
                     };
                     break;
               }
          };
     }
    };
    for(let i = FILE_VALUES.indexOf(initialPosition.file); i < FILE_VALUES.length; i++) {
     if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank}`]) {
          if(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file)) >= 1) {
               if(`${FILE_VALUES[i]}${String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank}` !== `${initialPosition.file}${initialPosition.rank}`) {
                    if( cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].hasPiece === false ) {
                     moves.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank});
                    } else {
                          if(cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[i]}${String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
                               movesToAttack.push({ file: FILE_VALUES[i], rank: String(Number(initialPosition.rank)-(i-FILE_VALUES.indexOf(initialPosition.file))) as Rank});
                          };
                          break;
                    }
               };
          };
     }
    };
    
    return { toMove: moves, toAttack: movesToAttack };
};