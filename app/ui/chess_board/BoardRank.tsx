"use client";

import { twMerge } from 'tailwind-merge'
import { useAppSelector } from '@/app/redux/store';
import { File, Rank, Files, Ranks, Cells, Cell } from '@/app/lib/types/index';

const BoardRank = ({ rank, ...rest }: { rank: Rank } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
    const isHovered = useAppSelector(state => state.chessBoardReducer.ranks[rank].isHovered);
    const className = twMerge(
        'flex justify-center items-center transition-all',
        'text-velvetBlack-custom col-span-1 row-span-1',
        isHovered === true ? 'font-md text-slate-900' : 'antialiased font-thin'
    );

    return <p className={ className }>{ rank }</p>;
};

export default BoardRank;