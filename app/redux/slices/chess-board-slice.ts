import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { File, Rank, Files, Ranks, Cells, Cell, CellSelected, InitialState, PieceMoveData } from '@/app/lib/types';
import { FILES_DEFAULT, RANKS_DEFAULT, CELLS_DEFAULT, CELL_SELECTED_DEFAULT } from '@/app/lib/constants';

const initialState : InitialState = {
    files: FILES_DEFAULT,
    ranks: RANKS_DEFAULT,
    cells: CELLS_DEFAULT, 
    selectedCell: CELL_SELECTED_DEFAULT,
};

const hoverCell = ( state : InitialState, action: PayloadAction<Cell> ) : void => {
    state.ranks[action.payload.rank]['isHovered'] = true;
    state.files[action.payload.file]['isHovered'] = true;
};
const unhoverCell = ( state : InitialState, action: PayloadAction<Cell> ) : void => {
    state.ranks[action.payload.rank]['isHovered'] = false;
    state.files[action.payload.file]['isHovered'] = false;
};

const handleMovePiece = ( state : InitialState, action: PayloadAction<PieceMoveData> ) : void => {
    state.cells[`${action.payload.prevCell.file}${action.payload.prevCell.rank}`]['piece'] = null;
    state.cells[`${action.payload.prevCell.file}${action.payload.prevCell.rank}`]['pieceColor'] = null; 
    state.cells[`${action.payload.prevCell.file}${action.payload.prevCell.rank}`]['pieceId'] = null; 
    state.cells[`${action.payload.newCell.file}${action.payload.prevCell.rank}`]['piece'] = action.payload.piece; 
    state.cells[`${action.payload.newCell.file}${action.payload.prevCell.rank}`]['pieceColor']  = action.payload.pieceColor;
    state.cells[`${action.payload.newCell.file}${action.payload.prevCell.rank}`]['pieceId'] = action.payload.pieceId;
};

// переписать
const selectCell = ( state: InitialState, action: PayloadAction<Cell> ) : void => {
    state.selectedCell.file = action.payload.file;
    state.selectedCell.rank = action.payload.rank;
};

export const chessBoardReducer = createSlice({
    name: 'chessBoard',
    initialState: initialState,
    reducers: {
        hover: hoverCell,
        unhover: unhoverCell,
        toggleSelect: selectCell,
        movePiece : handleMovePiece,
    },
});

export const { hover, unhover, toggleSelect, movePiece } = chessBoardReducer.actions;
export default chessBoardReducer.reducer;