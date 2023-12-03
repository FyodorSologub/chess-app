import Image from "next/image";
import { PiceColors } from "@/app/lib/types";

const Queen : React.FC<{ color: PiceColors }> = ( { color } ) : JSX.Element => {
    const core_root = '/chess_pieces';
    const root = color === 'Black' ? '/black/queen.svg' : '/white/queen.svg';
    const path = core_root + root;
    return (
        <Image
            src={ path }
            width='72'
            height='72'
            alt={ `The ${color.toLowerCase()} queen` }
        />
    );
};

export default Queen;