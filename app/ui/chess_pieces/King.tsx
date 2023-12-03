import Image from "next/image";
import { PiceColors } from "@/app/lib/types";

const King : React.FC<{ color: PiceColors }> = ( { color } ) : JSX.Element => {
    const core_root = '/chess_pieces';
    const root = color === 'Black' ? '/black/king.svg' : '/white/king.svg';
    const path = core_root + root;
    return (
        <Image
            src={ path }
            width='72'
            height='72'
            alt={ `The ${color.toLowerCase()} king` }
        />
    );
};

export default King;