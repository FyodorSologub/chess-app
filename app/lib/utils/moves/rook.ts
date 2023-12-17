import { Rank, File, Color, PieceVariant, Cell, Cells, possibleMoves } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";
import { getHorizontalMoves, getVerticalMoves, getDiagonalMoves } from '@/app/lib/utils/index';

export const getRookMoves = <P extends PieceVariant>( initialPosition : Cell, cells : Cells<P> ) : possibleMoves => {
    const horizontal = getHorizontalMoves(initialPosition, cells);
    const vertical = getVerticalMoves(initialPosition, cells);
    
    return { 
        toMove: [...horizontal.toMove, ...vertical.toMove], 
        toAttack: [...horizontal.toAttack, ...vertical.toAttack] 
    };
};
    
