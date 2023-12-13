"use client";

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell, PieceMoveData } from '@/app/lib/types';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import { hover, unhover, toggleSelect, movePiece, drawLegitMoves } from '@/app/redux/slices/chess-board-slice';
import PieceRenderer from './PieceRenderer';
import { getCellColorClasses, getPawnMoves } from '@/app/lib/utils';
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
  const cells = useAppSelector(state => state.chessBoardReducer.cells);
  const YYY = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`]);
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

  const handleMove = () => {
    if(stage === 'moving' && cellHasNotFigure && XXX.piece !== null && XXX.file !== null && XXX.rank !== null) {
      const moves = getPawnMoves({ file: XXX.file, rank: XXX.rank }, XXX.piece, cells);
      //console.log(moves)
      moves !== null && console.log(moves[0].file === file && moves[0].rank === rank)
      if(moves !== null && moves[0].file === file && moves[0].rank === rank) {
        movePiece_();
      }
    };
  };

  const handleSelect = () => {
    console.log(XXX)
    if(XXX.piece !== null && XXX.file !== null && XXX.rank !== null) {
      const moves = getPawnMoves({ file: XXX.file, rank: XXX.rank }, XXX.piece, cells);
      moves !== null && drawLegitMoves(moves);
    };
  };

  const handleClick = () => {
    if(stage === 'moving' && cellHasNotFigure) handleMove(); 
    if(stage === 'default' || cellHasNotFigure === false) {handleToggleSelect(); handleSelect();}
  };

  return (
    <p 
      onMouseEnter={ handleHover } onMouseLeave={ handleUnhover }
      onClick={ handleClick }
      className={ className }>
      <PieceRenderer file={ file } rank={ rank } isSelected={ isSelected } />
      {/*`${file}${rank}`*/}
      { YYY.showMove && 'Y' }
    </p>
  );
};

export default ChessCell;