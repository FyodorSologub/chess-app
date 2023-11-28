"use client"

import { twMerge } from 'tailwind-merge'
import { CellXCor, CellYCor, Cell } from '@/app/lib/interfaces';
import { alphabet, PiecesVariants, CellBgColor } from '@/app/lib/constants';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import Bishop from '../chess_pieces/Bishop';
import King from '../chess_pieces/King';
import React from 'react';

const getPieceType = (xCor: CellXCor, yCor: CellYCor) : PiecesVariants => {
    return PiecesVariants.King;
};

interface PieceRendererProps {
  xCor: CellXCor;
  yCor: CellYCor;
};

const PieceRenderer : React.FC<PieceRendererProps> = ( { xCor, yCor } ) : JSX.Element => {
    switch(true) {
        case true:
            return <King />
    };
};

export default PieceRenderer;