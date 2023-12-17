import { Rank, File, Color, PieceVariant, Cell, Cells, possibleMoves } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";
import { range } from '@/app/lib/utils/index';

export const getKnightMoves = <P extends PieceVariant>( initialPosition : Cell, cells : Cells<P> ) : possibleMoves => {
    const moves : Cell[] = [];
    const movesToAttack : Cell[] = [];

    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]) {
        if(cells[`${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)+1]}`].hasPiece === false) {
            moves.push()
        }
    };
    if(FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2] && RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]) {
        `${FILE_VALUES[FILE_VALUES.indexOf(initialPosition.file)-2]}${RANK_VALUES[RANK_VALUES.indexOf(initialPosition.rank)-1]}`
    }

    const move3 = '';
    const move4 = '';

    return { toMove: moves, toAttack: movesToAttack };
}