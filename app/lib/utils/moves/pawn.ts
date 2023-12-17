import { Rank, File, Color, PieceVariant, Cell, Cells } from "@/app/lib/types/index";
import { FILE_VALUES, RANK_VALUES } from "@/app/lib/constants/index";

export const getPawnMoves = <P extends PieceVariant>( position : Cell, piece: PieceVariant, color: Color, cells: Cells<P> ) : Cell[] | null => {
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