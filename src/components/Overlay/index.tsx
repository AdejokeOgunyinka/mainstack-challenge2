import React from 'react';
import {Box} from "@chakra-ui/react";

type OverlayT = {
    color: string;
    zIndex?: string | number;
    positioning?: string;
    top?: string | number
    left?:  string | number
}
const Overlay: React.FC<OverlayT> = ({color, zIndex, positioning, top, left}) => {
    return (
        < >
            <Box  zIndex={zIndex} color={color} width={"100vw"} height={"100vh"} />
        </>
    );
};

export default Overlay;