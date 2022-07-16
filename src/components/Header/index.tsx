import {Box, Link} from '@chakra-ui/react';
import { Logo } from '../index';
import { IHeader } from './types';
import Ellipsis from "../Elipsis";
import {KnowYouT} from "../../views/onboarding/pages/KnowYou";

const Header: React.FC<IHeader & KnowYouT> = ({ auth, ellipsis, skip, slide }) => {
    return (
        <Box w={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}  pos={auth ? 'absolute' : 'relative'} top={0} left={0}>
                    <Logo width={{base:"40px"}} height={{base:"40px"}} marginRight={"114px"} h="10vmin" my={'3'} pointerEvents="none" />
                    {ellipsis && (
                        <Ellipsis   slide={slide}/>
                    ) }
               <Link  fontSize={"14px"} >{
                   skip && ("Skip for now")
               }</Link>
        </Box>
    );
}

export default Header;