import { Rank, File, Color, PieceVariant, Cell, Cells, possibleMoves } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";
import { range } from '@/app/lib/utils/index';

export const getKnightMoves = <P extends PieceVariant>( initialPosition : Cell, cells : Cells<P> ) : possibleMoves => {
    const moves : Cell[] = [];
    const movesToAttack : Cell[] = [];

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]});
        }
    };
    
    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]});
        }
    };

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+2]});
        }
    };

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]});
        }
    };

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]});
        }
    };

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]});
        }
    };

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-2]});
        }
    };

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]}`].hasPiece === false) {
            moves.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]});
        } else if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]}`].hasPiece === true && cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]}`].pieceColor !== cells[`${initialPosition.file}${initialPosition.rank}`].pieceColor) {
            movesToAttack.push({ file: FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2], rank: RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]});
        }
    };

    return { toMove: moves, toAttack: movesToAttack };
}