import { Box, Flex, Heading, Spacer } from "@chakra-ui/react"
import { CalendarInput } from "../../../../components/CalendarInput"
import { Countries } from "../../../../components/Countries"
import { DoughnutChart } from "../../../../components/DoughnutChart"
import { Title } from "../../../../components/Title"
import { useMediaQuery } from '@chakra-ui/react'
import TimeBadge from "../../../../compositions/TimeBadge"

const TopLocationRender = () => {
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')

  return (
    <Flex flexDirection="column"  w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)' }}>
        <Box mt="22px" mb={{base:"45px", md: "70px"}}>
          <Title title="Top Location" hasButton />
        </Box>
          {!isLargerThan500 &&
            <Box mb={6}>
              <TimeBadge />
            </Box>
          }
        <Flex w={'full'} flexDirection={{ base: 'column', lg: 'row' }} >
        <Box
          p={6}
          flex={1}
          mr={{ base: 0, md: 2 }}
          mb={4}
          borderRadius="12px"
          border="1px solid #E5E8F0"
        >
          <Flex
            alignItems="center"
            flexDirection={{ base: 'column', sm: 'row' }}
          >
            <Heading as="h4" fontSize={{base: "lg", sm: "2xl"}} fontWeight="bold">
              Top Locations
            </Heading>
            <Spacer />
            {isLargerThan500 &&
              <Box >
                <CalendarInput />
            </Box>
            }
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
          >
            <Box alignSelf={{base: "start", lg: "center"}}>
              <Countries />
            </Box>
            <Box mt="45px" mb="58px" mr={{lg: "45px"}}>
              <DoughnutChart  />
            </Box>
          </Flex>
        </Box>
        </Flex>
    </Flex>
  )
}
export default TopLocationRender
