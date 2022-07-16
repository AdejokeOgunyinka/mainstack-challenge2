import React from 'react';
import {Box} from "@chakra-ui/react";
import {KnowYouT} from "../../views/onboarding/pages/KnowYou";

const Ellipsis: React.FC<KnowYouT> = ({ slide}) => {

    return (
        <Box pos={"relative"} left={"-114px"} display={"flex"}>
            <Box
                 borderRadius={"50px"} width={"8px"}
                 marginRight={"8px"} height={"8px"}
                 backgroundColor={slide === 0 ? "#131316" : "#D6D9E0"}/>
            <Box
                 borderRadius={"50px"}
                 width={"8px"}
                 marginRight={"8px"}
                 height={"8px"}
                 backgroundColor={slide === 1 ? "#131316" : "#D6D9E0"}/>
            <Box
                 borderRadius={"50px"}
                 width={"8px"}
                 marginRight={"8px"}
                 height={"8px"}
                 backgroundColor={slide === 2 ? "#131316" : "#D6D9E0"}/>
        </Box>
    );
};

export default Ellipsis;