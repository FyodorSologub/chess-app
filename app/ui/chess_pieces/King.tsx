import Image from "next/image";
import { Cell, Color } from "@/app/lib/types";

const King : React.FC<{ color: Color | null }> = ( { color } ) : JSX.Element => {
    const core_root = '/chess_pieces';
    const root = color === 'Black' ? '/black/king.svg' : '/white/king.svg';
    const path = core_root + root;
    return (
        <Image
            src={ path }
            width='72'
            height='72'
            alt={ `The ${color !== null ? color.toLowerCase() : ''} king` }
        />
    );
};

export default King;