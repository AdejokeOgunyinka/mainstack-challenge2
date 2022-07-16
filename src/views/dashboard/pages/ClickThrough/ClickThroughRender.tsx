import { Box, Flex } from "@chakra-ui/react";
import { Title } from "../../../../components/Title";
import TimeBadge from "../../../../compositions/TimeBadge";
import { LineChart } from "../../../../components/LineChart";
import {ctrData} from "../../../../data"


const ClickThroughRender = () => {

  return (
    <Flex flexDirection="column"  w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)'}}>
        <Box mt="22px" mb={{base:"45px", md: "46px"}}>
          <Title title="Click Through Rate" hasButton />
        </Box>
        <Flex overflowX="hidden" w="100%" mb={6}>
			    <TimeBadge />
		    </Flex>
        <Box>
            <LineChart title="Click Through Rate" timeGap="All Time" numbers="60%" data={ctrData} />
        </Box>
    </Flex>
  )
}

export default ClickThroughRender
