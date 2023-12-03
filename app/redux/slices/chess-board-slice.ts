import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { File, Rank, Files, Ranks, Cells, Cell, Pieces } from '@/app/lib/types';
import { files, ranks, cells, pieces } from '@/app/lib/constants';

interface InitialState {
    files: Files,
    ranks: Ranks,
    cells: Cells,
    pieces: Pieces,
};

const initialState = {
    files,
    ranks,
    cells, 
    pieces,
};

const hoverCell = (state : InitialState, action: PayloadAction<Cell>) : void => {
    state.ranks[action.payload.rank]['isHovered'] = true;
    state.files[action.payload.file]['isHovered'] = true;
};
const unhoverCell = (state : InitialState, action: PayloadAction<Cell>) : void => {
    state.ranks[action.payload.rank]['isHovered'] = false;
    state.files[action.payload.file]['isHovered'] = false;
};

export const chessBoardReducer = createSlice({
    name: 'chessBoard',
    initialState: initialState,
    reducers: {
        hover: hoverCell,
        unhover: unhoverCell,
    },
});

export const { hover, unhover } = chessBoardReducer.actions;
export default chessBoardReducer.reducer;