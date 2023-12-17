import * as Types from '@/app/lib/types/index';
import * as Constants from './index';
import { range, getCellColor } from "@/app/lib/utils/index";

export const DEFAULT_POSITIONS = Object.fromEntries(
    Constants.COLOR_VALUES.flatMap(color =>
        Constants.PIECE_VARIANT_VALUES.flatMap(pieceVariant => 
        range(Number(Constants.PIECE_ID_VALUES[pieceVariant]),1).map(id => 
          [ `${color}${pieceVariant}${id}` as 
            `${Types.Color}${Types.PieceVariant}${Types.PieceId[Types.PieceVariant]}`, 
            { file: Constants.FILE_OFFSET[pieceVariant][id-1], color: color, 
              type: pieceVariant, id: String(id),
              rank: pieceVariant !== 'Pawn' 
                ? Constants.RANK_OFFSET[color] 
                : Constants.RANK_OFFSET[`${color}Pawn`] 
            } 
          ]
        )
      )
    )  
) as Types.DefaultPositions<Types.PieceVariant>;