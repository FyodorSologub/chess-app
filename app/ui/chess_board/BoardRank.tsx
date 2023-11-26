import { Cell } from "@/app/lib/interfaces";

const BoardFile = (xCor: Cell['xCor'], yCor: Cell['yCor']) : JSX.Element => {
    const className = 'flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1';

    return <p className={ className } key={ `${xCor}:${yCor}` }>{ xCor }</p>;
};

export default BoardFile;