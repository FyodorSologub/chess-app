"use client";

import { twMerge } from 'tailwind-merge'
import { useAppSelector } from '@/app/redux/store';
import { CellXCor } from "@/app/lib/interfaces";

const BoardRank = ({ xCor, ...rest }: { xCor: CellXCor } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
    const isHovered = useAppSelector(state => state.chessBoardReducer.ranks[xCor].isHovered);
    const className = twMerge(
        'flex justify-center items-center transition-all',
        'text-velvetBlack-custom col-span-1 row-span-1',
        isHovered === true ? 'font-md' : 'antialiased font-thin'
    );

    return <p className={ className }>{ xCor }</p>;
};

export default BoardRank;