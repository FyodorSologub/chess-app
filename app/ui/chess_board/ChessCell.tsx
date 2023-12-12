"use client";

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell } from '@/app/lib/types';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import { hover, unhover, toggleSelect, movePiece } from '@/app/redux/slices/chess-board-slice';
import PieceRenderer from './PieceRenderer';
import { getCellColorClasses } from '@/app/lib/utils';
import React, { useState } from 'react';

const ChessCell = ({ file, rank, ...rest }: { file: File; rank: Rank } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
  //const [ isSelected, toggleSelect ] = useState(false);
  const selectedFile = useAppSelector(state => state.chessBoardReducer.selectedCell.file);
  const selectedRank = useAppSelector(state => state.chessBoardReducer.selectedCell.rank);
  const isSelected = selectedFile === file && selectedRank === rank;
  const color = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].color);
  const dispatch = dispatch_();
  const handleHover = () => dispatch(hover({ rank, file }));
  const handleUnhover = () => dispatch(unhover({ rank, file }));
  const selectCell = () => dispatch(toggleSelect({ rank, file }));
  const className = twMerge(
    'relative aspect-square col-span-1 row-span-1 flex justify-center items-center p-1',
    getCellColorClasses(color),
    isSelected === true ? 'bg-selectedCell-custom' : '',
  );

  return (
    <p 
      onMouseEnter={ handleHover } onMouseLeave={ handleUnhover }
      onClick={ selectCell }
      className={ className }>
      <PieceRenderer file={ file } rank={ rank } isSelected={ isSelected } />
    </p>
  );
};

export default ChessCell;