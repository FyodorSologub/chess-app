import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '@/app/lib/interfaces';
import { range } from '@/app/lib/utils';

interface Ranks { [xCor: number]: { isHovered: boolean } };
interface Files { [yCor: number]: { isHovered: boolean } };
interface Cells { [xCor: number]: { [yCor: number] : { isHovered: boolean } } };

interface InitialState {
    ranks: Ranks,
    files: Files,
    cells: Cells,
};

const ranks = range(8,1).reverse().reduce((o, key) => ({ ...o, [key]: { isHovered: false }}), {});
const files = range(8,1).reduce((o, key) => ({ ...o, [key]: { isHovered: false }}), {});
const cells : Cells = {};
range(8,1).forEach(i => { 
    cells[i] = {}; 
    range(8,1).forEach(j => {
        cells[i][j] = { isHovered: false };
    }); 
});

const initialState : InitialState = {
   ranks,
   files,
   cells, 
};

// reducers
const hoverCell = (state : InitialState, action: PayloadAction<number>) : void => {
    
};
const unhoverCell = (state : InitialState, action: PayloadAction<number>) : void => {

};

export const chessBoard = createSlice({
    name: 'chessBoard',
    initialState: initialState,
    reducers: {},
});