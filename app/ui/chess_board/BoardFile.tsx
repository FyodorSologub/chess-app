import { Cell } from "@/app/lib/interfaces";

const alphabet : readonly string[] = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
type AlphabetValue = typeof alphabet[number];
const getLetter = (yCor: Cell['yCor']) : AlphabetValue => alphabet[yCor+1];

const BoardRank = (xCor: Cell['xCor'], yCor: Cell['yCor']) : JSX.Element => {
    const className = 'flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1';

    return <p className={ className } key={ `${xCor}:${yCor}` }>{ getLetter(yCor) }</p>;
};

export default BoardRank;