import * as Types from './index';

export type Stage = 'default' | 'moving';

export type PieceMoveData<P extends Types.PieceVariant> = { 
    prevCell: Types.Cell, newCell: Types.Cell, 
    piece: Types.PieceVariant, pieceColor: Types.Color, pieceId: Types.PieceId[P] 
};

export type DefaultPositions<P extends Types.PieceVariant> = { 
    readonly [ key in `${Types.Color}${P}${Types.PieceId[P]}` ] : Types.Cell 
    & 
    { color: Types.Color, type: P, id: Types.PieceId[P] } 
};

export type SelectedCell<P extends Types.PieceVariant> = { 
    noCellSelected: boolean, 
    file?: Types.File, rank?: Types.Rank, piece?: Types.PieceVariant,
    pieceColor?: Types.Color, pieceId?: Types.PieceId[P],
};

export type InitialState<P extends Types.PieceVariant> = {
    files: Types.Files,
    ranks: Types.Ranks,
    cells: Types.Cells<P>,
    selectedCell: SelectedCell<P>, 
    stage: Stage,
};