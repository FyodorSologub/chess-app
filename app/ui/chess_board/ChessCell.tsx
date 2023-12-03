"use client";

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell } from '@/app/lib/types';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import { hover, unhover } from '@/app/redux/slices/chess-board-slice';
import PieceRenderer from './PieceRenderer';
import { getCellColorClasses } from '@/app/lib/utils';

const ChessCell = ({ file, rank, ...rest }: { file: File; rank: Rank } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
  const color = useAppSelector(state => state.chessBoardReducer.cells[`${file}${rank}`].color);
  
  const className = twMerge(
    'relative aspect-square col-span-1 row-span-1 flex justify-center items-center p-1',
    getCellColorClasses(color),
  );

  return (
    <p className={ className }>
      <PieceRenderer file={ file } rank={ rank } />
    </p>
  );
};

export default ChessCell;