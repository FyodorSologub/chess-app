import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell, Ranks, Files, Cells } from '@/app/lib/interfaces';
import { ranks, files, cells } from '@/app/lib/constants';

interface InitialState {
    ranks: Ranks,
    files: Files,
    cells: Cells,
};

const initialState : InitialState = {
   ranks,
   files,
   cells, 
};

// reducers
const hoverCell = (state : InitialState, action: PayloadAction<Cell>) : void => {
    state.cells[`${action.payload.yCor}${action.payload.xCor}`]['isHovered'] = true;
    state.ranks[action.payload.xCor]['isHovered'] = true;
    state.files[action.payload.yCor]['isHovered'] = true;
};
const unhoverCell = (state : InitialState, action: PayloadAction<Cell>) : void => {
    state.cells[`${action.payload.yCor}${action.payload.xCor}`]['isHovered'] = false;
    state.ranks[action.payload.xCor]['isHovered'] = false;
    state.files[action.payload.yCor]['isHovered'] = false;
};

export const chessBoard = createSlice({
    name: 'chessBoard',
    initialState: initialState,
    reducers: {
        hover: hoverCell,
        unhover: unhoverCell,
    },
});

export const { hover, unhover } = chessBoard.actions;
export default chessBoard.reducer;