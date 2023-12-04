import Image from "next/image";
import { Cell, File, PiceColors, Rank } from "@/app/lib/types";
import { useState } from "react";

const getMoves = (move : number, rank : Rank, file : File) : string[] => {
    return move === 0 ? [ `${file}${Number(rank)+2}` ]
    : [ `${file}${Number(rank)+1}` ]
};

const Pawn : React.FC<Cell & { color: PiceColors }> = ( { color, rank, file } ) : JSX.Element => {
    const [ move, setMove ] = useState(0);

    console.log(getMoves(move, rank, file));

    const core_root = '/chess_pieces';
    const root = color === 'Black' ? '/black/pawn.svg' : '/white/pawn.svg';
    const path = core_root + root;
    return (
        <Image
            src={ path }
            width='72'
            height='72'
            alt={ `A ${color.toLowerCase()} pawn` }
        />
    );
};

export default Pawn;