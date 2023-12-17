import * as Types from '@/app/lib/types/index';
import * as Constants from './index';
import { range, getCellColor } from "@/app/lib/utils/index";

const CELLS_RAW: Types.Cells<Types.PieceVariant> = Object.fromEntries(
    Constants.FILE_VALUES.flatMap(file =>
        Constants.RANK_VALUES.map(rank => [
        `${file}${rank}` as `${Types.File}${Types.Rank}`,
        {
          isHovered: false,
          isSelected: false,
          hasPiece: false,
          legitPlaceToMove: false,
          legitPlaceToAttack: false,
          showMove: false,
          color: getCellColor(file as Types.File, rank as Types.Rank),
        } as Types.CellData<Types.PieceVariant>,
      ])
    )
) as Types.Cells<Types.PieceVariant>;
  
Object.values(Constants.DEFAULT_POSITIONS).forEach(data => {
    CELLS_RAW[`${data['file']}${data['rank']}`].hasPiece = true;
    CELLS_RAW[`${data['file']}${data['rank']}`].piece = data['type'];
    CELLS_RAW[`${data['file']}${data['rank']}`].pieceColor = data['color'];
    CELLS_RAW[`${data['file']}${data['rank']}`].pieceId = data['id'];
});

export const CELLS_DEFAULT = { ...CELLS_RAW };
export const CELLS_KEYS = Object.keys(CELLS_DEFAULT);
  
export const  SELECTED_CELL : Types.SelectedCell<Types.PieceVariant> = { noCellSelected: true };