"use client"

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell, PieceVariant, Color, PieceMoveData } from '@/app/lib/types';
import { hover, unhover, toggleSelect, movePiece } from '@/app/redux/slices/chess-board-slice';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import Bishop from '../chess_pieces/Bishop';
import King from '../chess_pieces/King';
import Knight from '../chess_pieces/Knight';
import Pawn from '../chess_pieces/Pawn';
import Queen from '../chess_pieces/Queen';
import Rook from '../chess_pieces/Rook';

const Piece : React.FC<{ piece : PieceVariant | null, color : Color | null, file : File, rank: Rank }> = ( { piece, color, file, rank } ) : JSX.Element => {
    return piece === 'Bishop' ? <Bishop color={color} /> 
    : piece === 'King' ? <King color={color} /> 
    : piece === 'Knight' ? <Knight color={color} /> 
    : piece === 'Pawn' ? <Pawn color={color} /> 
    : piece === 'Queen' ? <Queen color={color} /> 
    : piece === 'Rook' ? <Rook color={color} /> 
    : <></>
};

const PieceRenderer : React.FC<Cell & { isSelected : Boolean }> = ( { file, rank, isSelected } ) : JSX.Element => {
    const piece = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].piece);
    const pieceColor = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].pieceColor);
    const pieceId = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].pieceId);
    return <><Piece piece={piece} color={pieceColor} file={file} rank={rank} /></>;
};

export default PieceRenderer;