import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { range } from '@/app/lib/utils';

interface Ranks { [xCor: number]: { isHovered: boolean } };
interface Files { [yCor: number]: { isHovered: boolean } };
interface Cells { [xCor: number]: { [yCor: number] : { isHovered: boolean } } };

interface InitialState {
    ranks: Ranks,
    files: Files,
    cells: Cells,
};

const initialState : InitialState = {
   ranks: range(8,1).reverse().reduce((o, key) => ({ ...o, [key]: { isHovered: false }}), {}),
   files: range(8,1).reduce((o, key) => ({ ...o, [key]: { isHovered: false }}), {}),
   cells: range(8,1).map(i => {range(8,1).map(j => [i,j])}).reduce((o,arr) => ({ ...o, [arr[0]]: { arr[1] : {isHovered: false} }})), 
};

export const chessBoard = createSlice({
    name: 'chessBoard',
    initialState: initialState,
    reducers: {},
});