import { 
    File, Rank, Files, Ranks,  Color, 
    PieceVariant, DefaultPositions, PieceId,
    FileOffset, RankOffset, Cells, CellSelected
} from "./types";
import { range, getCellColor } from "./utils";

export const FILE_VALUES: File[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const RANK_VALUES: Rank[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const FILES_DEFAULT = Object.fromEntries(
  FILE_VALUES.map(file => [file as File, { isHovered: false }])
) as Files;

export const RANKS_DEFAULT = Object.fromEntries(
  RANK_VALUES.map(rank => [rank as Rank, { isHovered: false }])
) as Ranks;

export const COLOR_VALUES: Color[] = ['White', 'Black'];

export const PIECE_VARIANT_VALUES: PieceVariant[] = [
  'Bishop', 'King', 'Knight', 'Pawn', 'Queen', 'Rook'
];

export const PIECE_ID_VALUES: PieceId = {
  'Bishop': '2',
  'King': '1',
  'Knight': '2',
  'Pawn': '8',
  'Queen': '1',
  'Rook': '2',
};

export const FILE_OFFSET : FileOffset = {
  'Bishop' : ['C', 'F'],
  'King' : ['E'], 
  'Knight': ['B', 'G'], 
  'Pawn' : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  'Queen' : ['D'],
  'Rook' : ['A', 'H'],
};

export const RANK_OFFSET : RankOffset = {
  'White': '1',
  'WhitePawn' : '2',
  'Black': '8',
  'BlackPawn': '7'
};

export const DEFAULT_POSITIONS = Object.fromEntries(
  COLOR_VALUES.flatMap(color =>
    PIECE_VARIANT_VALUES.flatMap(pieceVariant => 
      range(Number(PIECE_ID_VALUES[pieceVariant]),1).map(id => 
        [ `${color}${pieceVariant}${id}` as `${Color}${PieceVariant}${PieceId[PieceVariant]}`, 
          { file: FILE_OFFSET[pieceVariant][id-1], color: color, type: pieceVariant, id: String(id),
            rank: pieceVariant !== 'Pawn' ? RANK_OFFSET[color] : RANK_OFFSET[`${color}Pawn`] 
          } 
        ]
      )
    )
  )  
) as DefaultPositions<PieceVariant>;

const CELLS_RAW = Object.fromEntries(
  FILE_VALUES.flatMap(file => 
    RANK_VALUES.map(rank => 
      [`${file}${rank}`, { isHovered: false, piece: null, pieceColor: null, 
        pieceId: null, color: getCellColor(file as File, rank as Rank) }
      ]
    )
  )
) as Cells;

Object.values(DEFAULT_POSITIONS).forEach(data => {
  CELLS_RAW[`${data['file'] as File}${data['rank'] as Rank}`].piece = data['type'];
  CELLS_RAW[`${data['file'] as File}${data['rank'] as Rank}`].pieceColor = data['color'];
  CELLS_RAW[`${data['file'] as File}${data['rank'] as Rank}`].pieceId = data['id'];
});

export const CELLS_DEFAULT = { ...CELLS_RAW };
export const CELLS_KEYS = Object.keys(CELLS_DEFAULT);

export const CELL_SELECTED_DEFAULT : CellSelected = { file: null, rank: null };