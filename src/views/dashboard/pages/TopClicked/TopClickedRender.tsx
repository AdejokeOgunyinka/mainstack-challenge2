import { Box, Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { Title } from "../../../../components/Title"
import { Colors } from "../../../../constants"
import { useMediaQuery } from '@chakra-ui/react'


const TopClickedRender = () => {
  const [isLargerThan994] = useMediaQuery('(min-width: 994px)')

  return (
        <Flex flexDirection="column" w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)' }} >
        <Box mt="22px" mb={{base:"45px", md: "70px"}}>
          <Title title="Top Clicked Links" hasButton />
        </Box>
        <Flex w={'full'} flexDirection={{ base: 'column', lg: 'row' }} >
        <Box
          p={6}
          flex={1}
          mr={{ base: 0, md: 2 }}
          mb={4}
          borderRadius="12px"
          border="1px solid #E5E8F0"
        >
            <Box mb={{base: "20px", md: "55px"}}>
            <Heading as="h4" fontSize={{base: "lg", sm: "2xl"}} fontWeight="bold">
              Top Clicked Links
            </Heading>
            </Box>
            <Stack
          overflowX={'auto'}
          flexWrap={'nowrap'}
          css={{
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: '-ms-autohiding-scrollbar',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="md">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="md"
              ml={4}
            >
              50
            </Text>
          </Flex>
        </Stack>
        {isLargerThan994 &&
          <Center>
          <Button mt="34px" w="200px" borderRadius={20} fontWeight="normal" fontSize="15px" color="white" bgColor={Colors.primaryBlack}>Load more</Button>
        </Center>
        }

        </Box>
        </Flex>
        </Flex>
  )
}
export default TopClickedRender
