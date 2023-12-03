import Image from "next/image";
import { PiceColors } from "@/app/lib/types";

const Rook : React.FC<{ color: PiceColors }> = ( { color } ) : JSX.Element => {
    const core_root = '/chess_pieces';
    const root = color === 'Black' ? '/black/rook.svg' : '/white/rook.svg';
    const path = core_root + root;
    return (
        <Image
            src={ path }
            width='72'
            height='72'
            alt={ `A ${color.toLowerCase()} rook` }
        />
    );
};

export default Rook;