"use client"

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell } from '@/app/lib/types';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import Bishop from '../chess_pieces/Bishop';
import King from '../chess_pieces/King';
import React from 'react';

/*
const getPieceType = (xCor: CellXCor, yCor: CellYCor) : PiecesVariants => {
    return PiecesVariants.King;
};

interface PieceRendererProps {
  xCor: CellXCor;
  yCor: CellYCor;
};
*/

const PieceRenderer : React.FC<Cell> = ( { file, rank } ) : JSX.Element => {
    switch(true) {
        case true:
            return <King />
    };
};

export default PieceRenderer;