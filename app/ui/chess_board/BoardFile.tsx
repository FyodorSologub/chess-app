"use client";

import { twMerge } from 'tailwind-merge'
import { CellYCor } from "@/app/lib/interfaces";
import { useAppSelector } from '@/app/redux/store';

const BoardFile = ({ yCor, ...rest }: { yCor: CellYCor } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
    const isHovered = useAppSelector(state => state.chessBoardReducer.files[yCor].isHovered);
    const className = twMerge(
        'aspect-square flex justify-center items-center',
        'text-velvetBlack-custom col-span-1 row-span-1',
        isHovered === true ? 'font-sm' : 'antialiased font-thin'
    );

    return <p className={ className }>{ yCor }</p>;
};

export default BoardFile;