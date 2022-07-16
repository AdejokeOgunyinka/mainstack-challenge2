import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react"
import { FiDownload } from "react-icons/fi"
import { LineChart } from "../../../../components/LineChart"
import { Title } from "../../../../components/Title"
import ContactList from "../../../../compositions/ContactList"
import { contactListData, ctrData } from "../../../../data"

const AnalyticsRender = () => {
  return (
    <Flex flexDirection="column" w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)'}}  >
        <Box mt="22px" mb={{base:"45px", md: "70px"}}>
            <Title title="Analytics" hasButton />
        </Box>
        <Box my={4}>
        <LineChart hasInnerBadge title="Payments" numbers="$300" data={ctrData} />
        </Box>
        <Box my={4}>
            <LineChart hasInnerBadge title="Page Views" numbers="500" data={ctrData} />
        </Box>
        <Box my={4}>
            <LineChart hasInnerBadge title="Link Clicks" numbers="300" data={ctrData} />
        </Box>
        <Box my={4}>
            <LineChart title="ClickThrough Rate" numbers="500" data={ctrData} />
        </Box>
        <Flex w={'full'} mb={4} flexDirection={{ base: 'column', lg: 'row' }} >
        <Box
          p={6}
          flex="100%"
          borderRadius="12px"
          border="1px solid #E5E8F0"
        >
            <Flex mb={{base: "36px", md: "0px"}}  justifyContent={{base: "center", sm: "space-between"}} flexDirection={{ base: "column", sm: "row"}}>
            <Heading as="h4" fontSize={{base: "lg", sm: "2xl"}} lineHeight={{base: "24px", sm: "32px"}} mb={{base: "12px", sm:"0px"}} fontWeight="bold">
                    My subscribers - Mailing Lists
                </Heading>
                <Button fontSize="15px" alignSelf={{sm: "center"}}  borderRadius="100px" w="166px" py={2}  variant="outline" border="1px solid #E5E8F0">
                    Download CSV<span style={{marginLeft: "5px"}}><FiDownload /></span>
                </Button>
            </Flex>
            <Box>
                <ContactList headerOne="My subscribers" headerTwo="Email" infos={contactListData} />
            </Box>
            <Center>
                <Button mt="30px" borderRadius={20} color="#FFFFFF" width="200px" fontWeight="normal" bgColor="#131316">
                    Load more
                </Button>
            </Center>
        </Box>
        </Flex>
        <Flex w={'full'} mb={4} flexDirection={{ base: 'column', lg: 'row' }} >
        <Box
          p={6}
          flex="100%"
          borderRadius="12px"
          border="1px solid #E5E8F0"
        >
            <Flex mb={{base: "36px", md: "0px"}}  justifyContent={{base: "center", sm: "space-between"}} flexDirection={{ base: "column", sm: "row"}}>
            <Heading as="h4" fontSize={{base: "lg", sm: "2xl"}} lineHeight={{base: "24px", sm: "32px"}} mb={{base: "12px", sm:"0px"}} fontWeight="bold">
                    My subscribers - Phone Lists
                </Heading>
                <Button fontSize="15px" alignSelf={{sm: "center"}}  borderRadius="100px" w="166px" py={2}  variant="outline" border="1px solid #E5E8F0">
                    Download CSV<span style={{marginLeft: "5px"}}><FiDownload /></span>
                </Button>
            </Flex>
            <Box>
                <ContactList headerOne="My subscribers" headerTwo="Email" infos={contactListData} />
            </Box>
            <Center>
                <Button mt="30px" borderRadius={20} color="#FFFFFF" width="200px" fontWeight="normal" bgColor="#131316">
                    Load more
                </Button>
            </Center>
        </Box>
        </Flex>
    <Flex w={'full'} mb={4} flexDirection={{ base: 'column', lg: 'row' }} >
    <Box
      p={6}
      flex="100%"
      borderRadius="12px"
      border="1px solid #E5E8F0"
    >
            <Flex mb={{base: "36px", md: "0px"}}  justifyContent={{base: "center", sm: "space-between"}} flexDirection={{ base: "column", sm: "row"}}>
            <Heading as="h4" fontSize={{base: "lg", sm: "2xl"}} lineHeight={{base: "24px", sm: "32px"}} mb={{base: "12px", sm:"0px"}} fontWeight="bold">
                Downloadable Resources
            </Heading>
            <Button fontSize="15px" alignSelf={{sm: "center"}}  borderRadius="100px" w="166px" py={2}  variant="outline" border="1px solid #E5E8F0">
                Download CSV<span style={{marginLeft: "5px"}}><FiDownload /></span>
            </Button>
        </Flex>
        <Box>
            <ContactList headerOne="People" headerTwo="Email" infos={contactListData} />
        </Box>
        <Center>
            <Button mt="30px" borderRadius={20} color="#FFFFFF" width="200px" fontWeight="normal" bgColor="#131316">
                Load more
            </Button>
        </Center>
    </Box>
    </Flex>
    </Flex>
  )
}
export default AnalyticsRender
