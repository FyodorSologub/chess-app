import { Rank, File, Color, PieceVariant, Cell, Cells, Piece, PieceId, possibleMoves } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES, PIECES_DEFAULT, DEFAULT_POSITIONS } from "@/app/lib/constants/index";

export const getPawnMoves = <P extends PieceVariant>( position : Cell, piece: PieceVariant, color: Color, cells: Cells<P>, pieces: any ) : possibleMoves => {
    const cell = cells[`${position.file}${position.rank}`];
    if(cell.piece === undefined || cell.pieceColor === undefined || cell.pieceId === undefined) return { toMove: [], toAttack: [] };
    const defaultPosition = DEFAULT_POSITIONS[`${cell.pieceColor}${cell.piece}${cell.pieceId}`];
    const isFirstMove = defaultPosition.rank === position.rank && defaultPosition.file === position.file;

    const moves : Cell[] = [];
    const movesToAttack : Cell[] = [];

    if(cell.pieceColor === 'White') {
               if(cells[`${position.file}${String(Number(position.rank)+1) as Rank}`] && cells[`${position.file}${String(Number(position.rank)+1) as Rank}`].hasPiece === false) {
                    moves.push({ file: position.file, rank: String(Number(position.rank)+1) as Rank});
               } 
               if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)+1]}${String(Number(position.rank)+1) as Rank}`] && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)+1]}${String(Number(position.rank)+1) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)+1]}${String(Number(position.rank)+1) as Rank}`].pieceColor === 'Black') {
                    movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(position.file)+1], rank: String(Number(position.rank)+1) as Rank});
               } 
               if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)-1]}${String(Number(position.rank)+1) as Rank}`] && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)-1]}${String(Number(position.rank)+1) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)-1]}${String(Number(position.rank)+1) as Rank}`].pieceColor === 'Black') {
                    movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(position.file)-1], rank: String(Number(position.rank)+1) as Rank});
               } 
    } else if(cell.pieceColor === 'Black') {
               if(cells[`${position.file}${String(Number(position.rank)-1) as Rank}`] && cells[`${position.file}${String(Number(position.rank)-1) as Rank}`].hasPiece === false) {
                    moves.push({ file: position.file, rank: String(Number(position.rank)-1) as Rank});
               } 
               if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)+1]}${String(Number(position.rank)-1) as Rank}`] && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)+1]}${String(Number(position.rank)-1) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)+1]}${String(Number(position.rank)-1) as Rank}`].pieceColor === 'White') {
                    movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(position.file)+1], rank: String(Number(position.rank)-1) as Rank});
               } 
               if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)-1]}${String(Number(position.rank)-1) as Rank}`] && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)-1]}${String(Number(position.rank)-1) as Rank}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(position.file)-1]}${String(Number(position.rank)-1) as Rank}`].pieceColor === 'White') {
                    movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(position.file)-1], rank: String(Number(position.rank)-1) as Rank});
               } 
    }//

    if(isFirstMove) {
          if(cell.pieceColor === 'White') {
               if(cells[`${position.file}${String(Number(position.rank)+2) as Rank}`]) {
                    if(cells[`${position.file}${String(Number(position.rank)+2) as Rank}`].hasPiece === false) {
                         moves.push({ file: position.file, rank: String(Number(position.rank)+2) as Rank});
                    } 
               }
     } else if(cell.pieceColor === 'Black') {
               if(cells[`${position.file}${String(Number(position.rank)-2) as Rank}`]) {
                    if(cells[`${position.file}${String(Number(position.rank)-2) as Rank}`].hasPiece === false) {
                         moves.push({ file: position.file, rank: String(Number(position.rank)-2) as Rank});
                    } 
               }
     }
    }

    return { toMove: moves, toAttack: movesToAttack };
};