import { Box, Flex } from "@chakra-ui/react";
import { Title } from "../../../../components/Title";
import TimeBadge from "../../../../compositions/TimeBadge";
import { LineChart } from "../../../../components/LineChart";
import {clicksData} from "../../../../data"


const LinkClicksRender = () => {


  return (
    <Flex flexDirection="column"  w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)'}}>
        <Box mt="22px" mb={{base:"45px", md: "46px"}}>
          <Title title="Link Clicks" hasButton />
        </Box>
        <Flex overflowX="hidden" w="100%" mb={6}>
			    <TimeBadge />
		    </Flex>
        <Box>
            <LineChart title="Link Clicks" timeGap="All Time" hasTime numbers="41" data={clicksData} />
        </Box>
    </Flex>
  )

}

export default LinkClicksRender
