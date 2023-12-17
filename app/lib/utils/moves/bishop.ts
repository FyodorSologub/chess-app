import { Rank, File, Color, PieceVariant, Cell, Cells, possibleMoves } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";
import { getHorizontalMoves, getVerticalMoves, getDiagonalMoves } from '@/app/lib/utils/index';

export const getBishopMoves = <P extends PieceVariant>( initialPosition : Cell, cells : Cells<P> ) : possibleMoves => {
    const diagonal = getDiagonalMoves(initialPosition, cells);
    
    return { 
        toMove: [...diagonal.toMove], 
        toAttack: [...diagonal.toAttack] 
    };
};