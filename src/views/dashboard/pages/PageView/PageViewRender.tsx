import { Box, Flex } from "@chakra-ui/react";
import { Title } from "../../../../components/Title";
import TimeBadge from "../../../../compositions/TimeBadge";
import { LineChart } from "../../../../components/LineChart";
import {pageViewData} from "../../../../data"



const PageViewRender = () => {

  return (
    <Flex flexDirection="column" 
    w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)' }}
    >
        <Box mt="22px" mb={{base:"45px", md: "46px"}}>
          <Title title="Page Views" hasButton />
        </Box>
        <Flex overflowX="hidden" w="100%" mb={6}>
          <TimeBadge />
		    </Flex>
        <Box>
            <LineChart title="Page Views" timeGap="All Time" numbers="500" hasTime data={pageViewData} />
        </Box>
    </Flex>
  )
}

export default PageViewRender
