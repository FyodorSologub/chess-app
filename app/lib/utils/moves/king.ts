import { Rank, File, Color, PieceVariant, Cell, Cells, possibleMoves, CellData } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";
import { range } from '@/app/lib/utils/index';

export const getKingMoves = <P extends PieceVariant>( initialPosition : Cell, cells : Cells<P> ) : possibleMoves => {
    const moves : Cell[] = [];
    const movesToAttack : Cell[] = []; 
    const rawMoves : string[] = [];

    const initialCell = cells[`${initialPosition.file}${initialPosition.rank}`];

    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${String(Number(initialPosition.rank)+1) as Rank}`);
    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${String(Number(initialPosition.rank)+0) as Rank}`);
    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-1]}${String(Number(initialPosition.rank)-1) as Rank}`);
    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)]}${String(Number(initialPosition.rank)+1) as Rank}`);
    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)]}${String(Number(initialPosition.rank)-1) as Rank}`);
    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${String(Number(initialPosition.rank)+1) as Rank}`);
    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${String(Number(initialPosition.rank)+0) as Rank}`);
    rawMoves.push(`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)+1]}${String(Number(initialPosition.rank)-1) as Rank}`);

    rawMoves.forEach(key => {
        if(!cells[key as `${File}${Rank}`]) return;
        const cell = cells[key as `${File}${Rank}`];
        if(cell.hasPiece === false) {
            moves.push({ file: key[0] as File, rank: key[1] as Rank });
        } else if(cell.hasPiece === true && cell.pieceColor !== initialCell.pieceColor) {
            movesToAttack.push({ file: key[0] as File, rank: key[1] as Rank });
        }
    });

    return { toMove: moves, toAttack: movesToAttack };
};