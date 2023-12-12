import Image from "next/image";
import { Cell, Color } from "@/app/lib/types";

const Knight : React.FC<{ color: Color | null }> = ( { color } ) : JSX.Element => {
    const core_root = '/chess_pieces';
    const root = color === 'Black' ? '/black/knight.svg' : '/white/knight.svg';
    const path = core_root + root;
    return (
        <Image
            src={ path }
            width='72'
            height='72'
            alt={ `A ${color !== null ? color.toLowerCase() : ''} knight` }
        />
    );
};

export default Knight;