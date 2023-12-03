"use client";

import { twMerge } from 'tailwind-merge'
import { File, Rank, Files, Ranks, Cells, Cell } from '@/app/lib/types';
import { useAppSelector } from '@/app/redux/store';

const BoardFile = ({ file, ...rest }: { file: File } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
    const isHovered = useAppSelector(state => state.chessBoardReducer.files[file].isHovered);
    const className = twMerge(
        'flex justify-center items-center',
        'text-velvetBlack-custom col-span-1 row-span-1 transition-all',
        isHovered === true ? 'font-md' : 'antialiased font-thin'
    );

    return <p className={ className }>{ file }</p>;
};

export default BoardFile;