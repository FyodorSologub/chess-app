"use client";

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell, PieceMoveData } from '@/app/lib/types';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import { hover, unhover, toggleSelect, movePiece } from '@/app/redux/slices/chess-board-slice';
import PieceRenderer from './PieceRenderer';
import { getCellColorClasses } from '@/app/lib/utils';
import React, { useState } from 'react';

const ChessCell = ({ file, rank, ...rest }: { file: File; rank: Rank } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
  //const isSelected = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].isSelected);
  const color = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].color);
  const selectedCellRank = useAppSelector(state => state.chessBoardReducer.selectedCell.rank);
  const selectedCellFile = useAppSelector(state => state.chessBoardReducer.selectedCell.file);
  const XXX = useAppSelector(state => state.chessBoardReducer.selectedCell);
  const cellHasNotFigure = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].piece) === null;
  const stage = useAppSelector(state => state.chessBoardReducer.stage);
  const isSelected = selectedCellRank === rank && selectedCellFile == file;
  const dispatch = dispatch_();
  const handleHover = () => dispatch(hover({ rank, file }));
  const handleUnhover = () => dispatch(unhover({ rank, file }));
  const handleToggleSelect = () => dispatch(toggleSelect({ rank, file }));
  const moveData : PieceMoveData = { newCell:{ file, rank }, prevCell:{ file: selectedCellFile, rank: selectedCellRank}, piece: XXX.piece, pieceColor: XXX.pieceColor, pieceId: XXX.pieceId };
  const movePiece_ = () => dispatch(movePiece(moveData));
  const className = twMerge(
    'relative aspect-square col-span-1 row-span-1 flex justify-center items-center p-1',
    getCellColorClasses(color),
    isSelected === true ? 'bg-selectedCell-custom' : '',
  );
  const handleClick = () => stage === 'moving' && cellHasNotFigure ? movePiece_() : cellHasNotFigure === false ?  handleToggleSelect() : null;

  return (
    <p 
      onMouseEnter={ handleHover } onMouseLeave={ handleUnhover }
      onClick={ handleClick }
      className={ className }>
      <PieceRenderer file={ file } rank={ rank } isSelected={ isSelected } />
      {`${file}${rank}`}
    </p>
  );
};

export default ChessCell;