import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { File, Rank, Files, Ranks, Cells, Cell, SelectedCell, InitialState, PieceMoveData, PieceVariant } from '@/app/lib/types/index';
import { FILES_DEFAULT, RANKS_DEFAULT, CELLS_DEFAULT, SELECTED_CELL, DEFAULT_STAGE } from '@/app/lib/constants/index';
import { getBishopMoves, getKingMoves, getKnightMoves, getPawnMoves, getQueenMoves, getRookMoves } from '@/app/lib/utils/index';

const initialState : InitialState<PieceVariant> = {
    files: FILES_DEFAULT,
    ranks: RANKS_DEFAULT,
    cells: CELLS_DEFAULT,
    selectedCell : SELECTED_CELL,
    stage: DEFAULT_STAGE,
};

const hoverCell = ( state : InitialState<PieceVariant>, action: PayloadAction<Cell> ) : void => {
    state.ranks[action.payload.rank]['isHovered'] = true;
    state.files[action.payload.file]['isHovered'] = true;
};
const unhoverCell = ( state : InitialState<PieceVariant>, action: PayloadAction<Cell> ) : void => {
    state.ranks[action.payload.rank]['isHovered'] = false;
    state.files[action.payload.file]['isHovered'] = false;
};

const handleMovePiece = ( state : InitialState<PieceVariant>, action: PayloadAction<PieceMoveData<PieceVariant>> ) : void => {
    if (action.payload.prevCell.file === null || action.payload.prevCell.rank === null) return;
    if (action.payload.newCell.file === null || action.payload.newCell.rank === null) return;
    state.cells[`${action.payload.prevCell.file}${action.payload.prevCell.rank}`].hasPiece = false;
    state.cells[`${action.payload.newCell.file}${action.payload.newCell.rank}`].hasPiece = true;  
    state.cells[`${action.payload.newCell.file}${action.payload.newCell.rank}`]['piece'] = action.payload.piece; 
    state.cells[`${action.payload.newCell.file}${action.payload.newCell.rank}`]['pieceColor']  = action.payload.pieceColor;
    state.cells[`${action.payload.newCell.file}${action.payload.newCell.rank}`]['pieceId'] = action.payload.pieceId;
    state.selectedCell.noCellSelected = true;
    state.stage = 'default';
    Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`].showMove = false);
    Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`].legitPlaceToAttack = false);
};

const selectCell = ( state: InitialState<PieceVariant>, action: PayloadAction<Cell> ) : void => {
    if(state.cells[`${action.payload.file}${action.payload.rank}`].hasPiece === false) return;
    switch(state.selectedCell.file === action.payload.file && state.selectedCell.rank === action.payload.rank && state.selectedCell.noCellSelected === false) {
        case true:
            state.selectedCell.noCellSelected = true;
            state.stage = 'default';
            Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`]['showMove'] = false);
            Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`].legitPlaceToAttack = false);
            break;
        case false:
            Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`]['showMove'] = false);
            Object.keys(state.cells).forEach(key => state.cells[`${key[0] as File}${key[1] as Rank}`].legitPlaceToAttack = false);
            const cellData = state.cells[`${action.payload.file}${action.payload.rank}`];
            state.selectedCell = { noCellSelected: false, file : action.payload.file, rank: action.payload.rank, piece : cellData.piece, pieceColor : cellData.pieceColor, pieceId : cellData.pieceId };
            state.stage = 'moving';
            if (cellData.piece !== undefined && cellData.pieceColor !== undefined) {
                if (cellData.piece === 'Pawn') {
                    const moves = getPawnMoves({ file: action.payload.file, rank: action.payload.rank }, cellData.piece, cellData.pieceColor, state.cells);
                    if (moves !== null) {
                        moves.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                    }
                } else if (cellData.piece === 'Queen') {
                    const moves = getQueenMoves({ file: action.payload.file, rank: action.payload.rank }, state.cells);
                    if (moves !== null) {
                        moves.toMove.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                        moves.toAttack.forEach(cell => state.cells[`${cell.file}${cell.rank}`].legitPlaceToAttack = true);
                    }
                } else if (cellData.piece === 'Rook') {
                    const moves = getRookMoves({ file: action.payload.file, rank: action.payload.rank }, state.cells);
                    if (moves !== null) {
                        moves.toMove.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                        moves.toAttack.forEach(cell => state.cells[`${cell.file}${cell.rank}`].legitPlaceToAttack = true);
                    }
                } else if (cellData.piece === 'Bishop') {
                    const moves = getBishopMoves({ file: action.payload.file, rank: action.payload.rank }, state.cells);
                    if (moves !== null) {
                        moves.toMove.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                        moves.toAttack.forEach(cell => state.cells[`${cell.file}${cell.rank}`].legitPlaceToAttack = true);
                    }
                } else if (cellData.piece === 'Knight') {
                    const moves = getKnightMoves({ file: action.payload.file, rank: action.payload.rank }, state.cells);
                    if (moves !== null) {
                        moves.toMove.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                        moves.toAttack.forEach(cell => state.cells[`${cell.file}${cell.rank}`].legitPlaceToAttack = true);
                    }
                } else if(cellData.piece === 'King') {
                    const moves = getKingMoves({ file: action.payload.file, rank: action.payload.rank }, state.cells);
                    if (moves !== null) {
                        moves.toMove.forEach(cell => state.cells[`${cell.file}${cell.rank}`]['showMove'] = true);
                        moves.toAttack.forEach(cell => state.cells[`${cell.file}${cell.rank}`].legitPlaceToAttack = true);
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
    },
});

export const { hover, unhover, toggleSelect, movePiece, } = chessBoardReducer.actions;
export default chessBoardReducer.reducer;