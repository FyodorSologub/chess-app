"use client";

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell, PieceMoveData, PieceVariant } from '@/app/lib/types/index';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import { hover, unhover, toggleSelect, movePiece } from '@/app/redux/slices/chess-board-slice';
import PieceRenderer from './PieceRenderer';
import { getCellColorClasses, getPawnMoves, getQueenMoves } from '@/app/lib/utils';
import React, { useState } from 'react';

const ChessCell = ({ file, rank, ...rest }: { file: File; rank: Rank } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
  //const isSelected = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].isSelected);
  const color = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].color);
  const selectedCellRank = useAppSelector(state => state.chessBoardReducer.selectedCell.rank);
  const selectedCellFile = useAppSelector(state => state.chessBoardReducer.selectedCell.file);
  const XXX = useAppSelector(state => state.chessBoardReducer.selectedCell);
  const cellHasNotFigure = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].hasPiece) === false;
  const stage = useAppSelector(state => state.chessBoardReducer.stage);
  const isSelected = selectedCellRank === rank && selectedCellFile == file;
  const cells = useAppSelector(state => state.chessBoardReducer.cells);
  const YYY = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`]);
  const dispatch = dispatch_();
  const handleHover = () => dispatch(hover({ rank, file }));
  const handleUnhover = () => dispatch(unhover({ rank, file }));
  const handleToggleSelect = () => dispatch(toggleSelect({ rank, file }));
  
  const className = twMerge(
    'relative aspect-square col-span-1 row-span-1 flex justify-center items-center p-1 hover:cursor-pointer',
    getCellColorClasses(color),
    isSelected === true ? 'bg-slate-600' : '',
    YYY.showMove === true ? 'hover:border-2 hover:border-slate-500' : '',
  );

  const moveData : PieceMoveData<PieceVariant> = { newCell:{ file, rank }, prevCell:{ file: selectedCellFile ? selectedCellFile : 'A', rank: selectedCellRank ? selectedCellRank : '1'}, piece: XXX.piece ? XXX.piece : 'Bishop', pieceColor: XXX.pieceColor ? XXX.pieceColor : 'Black', pieceId: XXX.pieceId ? XXX.pieceId : '1' };
  const movePiece_ = () => dispatch(movePiece(moveData));
  
  const handleMove = () => {
    if(stage === 'moving' && cellHasNotFigure && XXX.piece !== null && XXX.file !== null && XXX.rank !== null && XXX.pieceColor !== null) {
      if(XXX.piece === 'Pawn' && XXX.file && XXX.rank && XXX.pieceColor) {
        const moves = getPawnMoves({ file: XXX.file, rank: XXX.rank }, XXX.piece, XXX.pieceColor, cells);
        if(moves !== null && moves[0].file === file && moves[0].rank === rank) {
          movePiece_();
        }
      } if(XXX.piece === 'Queen' && XXX.file && XXX.rank && XXX.pieceColor) {
        const moves = getQueenMoves({ file: XXX.file, rank: XXX.rank }, cells);
        if(moves !== null && Object.values(moves).map(data => `${data.file}${data.rank}`).includes(`${file}${rank}`)) {
          movePiece_();
        }
      } else { 
        //movePiece_();
      }
    };
  };

  const handleClick = () => {
    if(stage === 'moving' && cellHasNotFigure) handleMove(); 
    if(stage === 'default' || cellHasNotFigure === false) {handleToggleSelect();}
  };

  return (
    <p 
      onMouseEnter={ handleHover } onMouseLeave={ handleUnhover }
      onClick={ handleClick }
      className={ className }>
      <PieceRenderer file={ file } rank={ rank } isSelected={ isSelected } />
      
      { YYY.showMove && <span className='w-3 h-3 bg-slate-800 opacity-50 rounded-full'></span> }
    </p>
  );
};

export default ChessCell;