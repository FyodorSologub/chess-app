import { 
    File, Rank, Files, Ranks, Cell, Color, 
    PieceVariant, DefaultPositions, PieceId, PieceIdCollection
} from "./types_demo";
import { range } from "./utils";

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

export const DEFAULT_POSITIONS = Object.fromEntries(
  COLOR_VALUES.flatMap(color =>
    PIECE_VARIANT_VALUES.flatMap(pieceVariant => 
      [ [ `${color}${pieceVariant}` as `${Color}${PieceVariant}` ], range(Number(PIECE_ID_VALUES[pieceVariant]),1).flatMap(id => [{ file: 'A', rank: id }]) ]
    )
  )
) as DefaultPositions;
