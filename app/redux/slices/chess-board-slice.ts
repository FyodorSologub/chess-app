import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { File, Rank, Files, Ranks, Cells, Cell, CellSelected, InitialState, PieceMoveData } from '@/app/lib/types';
import { FILES_DEFAULT, RANKS_DEFAULT, CELLS_DEFAULT, CELL_SELECTED_DEFAULT, SELECTED_CELL_COORDINATES, DEFAULT_STAGE } from '@/app/lib/constants';
import { getPawnMoves, getQueenMoves } from '@/app/lib/utils';

const initialState : InitialState = {
    files: FILES_DEFAULT,
    ranks: RANKS_DEFAULT,
    cells: CELLS_DEFAULT,
    selectedCell : SELECTED_CELL_COORDINATES,
    stage: DEFAULT_STAGE,
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
    if (action.payload.prevCell.file === null || action.payload.prevCell.rank === null) return;
    if (action.payload.newCell.file === null || action.payload.newCell.rank === null) return;
    //console.log(`${action.payload.pieceColor}${action.payload.piece}${action.payload.pieceId} from ${action.payload.prevCell.file}${action.payload.prevCell.rank} to ${action.payload.newCell.file}${action.payload.newCell.rank}`)
    state.cells[`${action.payload.prevCell.file}${action.payload.prevCell.rank}`]['piece'] = null;
    state.cells[`${action.payload.prevCell.file}${action.payload.prevCell.rank}`]['pieceColor'] = null; 
    state.cells[`${action.payload.prevCell.file}${action.payload.prevCell.rank}`]['pieceId'] = null; 
    state.cells[`${action.payload.newCell.file}${action.payload.newCell.rank}`]['piece'] = action.payload.piece; 
    state.cells[`${action.payload.newCell.file}${action.payload.newCell.rank}`]['pieceColor']  = action.payload.pieceColor;
    state.cells[`${action.payload.newCell.file}${action.payload.newCell.rank}`]['pieceId'] = action.payload.pieceId;
    state.selectedCell = { file : null, rank: null, piece : null, pieceColor : null, pieceId : null };
    state.stage = 'default';
    Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`]['showMove'] = false);
};

const drawLegitMoves_ = ( state : InitialState, action: PayloadAction<Cell[]> ) : void => {
    action.payload.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
};

const clearLegitMoves_ = ( state : InitialState ) : void => {
    Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`]['showMove'] = false);
};

const selectCell = ( state: InitialState, action: PayloadAction<Cell> ) : void => {
    switch(state.selectedCell.file === action.payload.file && state.selectedCell.rank === action.payload.rank) {
        case true:
            state.selectedCell = { file : null, rank: null, piece : null, pieceColor : null, pieceId : null };
            state.stage = 'default';
            Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`]['showMove'] = false);
            break;
        case false:
            Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`]['showMove'] = false);
            const cellData = state.cells[`${action.payload.file}${action.payload.rank}`];
            state.selectedCell = { file : action.payload.file, rank: action.payload.rank, piece : cellData.piece, pieceColor : cellData.pieceColor, pieceId : cellData.pieceId };
            state.stage = 'moving';
            if (cellData.piece !== null && cellData.pieceColor !== null) {
                if (cellData.piece === 'Pawn') {
                    const moves = getPawnMoves({ file: action.payload.file, rank: action.payload.rank }, cellData.piece, cellData.pieceColor, state.cells);
                    moves !== null && drawLegitMoves(moves);
                    if (moves !== null) {
                        moves.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                    }
                }
                if (cellData.piece === 'Queen') {
                    const moves = getQueenMoves({ file: action.payload.file, rank: action.payload.rank }, state.cells);
                    //console.log(moves)
                    moves !== null && drawLegitMoves(moves);
                    if (moves !== null) {
                        moves.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                    }
                }
            }
            break;
    };
};

export const chessBoardReducer = createSlice({
    name: 'chessBoard',
    initialState: initialState,
    reducers: {
        hover: hoverCell,
        unhover: unhoverCell,
        toggleSelect: selectCell,
        movePiece : handleMovePiece,
        drawLegitMoves : drawLegitMoves_,
        clearLegitMoves : clearLegitMoves_,
    },
});

export const { hover, unhover, toggleSelect, movePiece, drawLegitMoves, clearLegitMoves } = chessBoardReducer.actions;
export default chessBoardReducer.reducer;