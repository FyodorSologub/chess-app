"use client"

import { twMerge } from 'tailwind-merge'
import { CellXCor, CellYCor, Cell } from '@/app/lib/interfaces';
import { alphabet } from '@/app/lib/constants';
import { useAppSelector, dispatch_ } from '@/app/redux/store';

import Bishop from '../chess_pieces/Bishop';

const PieceRenderer = () : JSX.Element => {
    return (
        <Bishop />
    );
};

export default PieceRenderer;