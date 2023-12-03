"use client"

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell, PieceVariant, PiceColors } from '@/app/lib/types';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import Bishop from '../chess_pieces/Bishop';
import King from '../chess_pieces/King';
import Knight from '../chess_pieces/Knight';
import Pawn from '../chess_pieces/Pawn';
import Queen from '../chess_pieces/Queen';
import Rook from '../chess_pieces/Rook';
import React from 'react';

const getPiece = ( piece : PieceVariant, color : PiceColors ) : JSX.Element => {
    return piece === 'Bishop' ? <Bishop color={color} /> 
    : piece === 'King' ? <King color={color} /> 
    : piece === 'Knight' ? <Knight color={color} /> 
    : piece === 'Pawn' ? <Pawn color={color} /> 
    : piece === 'Queen' ? <Queen color={color} /> 
    : <Rook color={color} /> 
};

const PieceRenderer : React.FC<Cell> = ( { file, rank } ) : JSX.Element => {
    const piece = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].piece);
    const pieceColor = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].pieceColor);

    return piece === null || pieceColor === null ? <></> : getPiece(piece, pieceColor);
};

export default PieceRenderer;