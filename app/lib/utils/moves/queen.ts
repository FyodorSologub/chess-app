import { Rank, File, Color, PieceVariant, Cell, Cells, possibleMoves } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";
import { getHorizontalMoves, getVerticalMoves, getDiagonalMoves } from '@/app/lib/utils/index';

export const getQueenMoves = <P extends PieceVariant>( initialPosition : Cell, cells : Cells<P> ) : possibleMoves => {
    const horizontal = getHorizontalMoves(initialPosition, cells);
    const vertical = getVerticalMoves(initialPosition, cells);
    const diagonal = getDiagonalMoves(initialPosition, cells);
    
    return { 
        toMove: [...horizontal.toMove, ...vertical.toMove, ...diagonal.toMove], 
        toAttack: [...horizontal.toAttack, ...vertical.toAttack, ...diagonal.toAttack] 
    };
};