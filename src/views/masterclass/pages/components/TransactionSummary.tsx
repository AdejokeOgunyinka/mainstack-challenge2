import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import SUMMARY from 'assets/svgs/masterclass/icons/call_received.svg';
import Colors from 'constants/Colors';

const TransactionSummary = () => {
  return (
    <Box
      css={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Flex
        mx="auto"
        mb={'16px'}
        w={12}
        h={12}
        bg="#EBF8F3"
        borderRadius="50%"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={SUMMARY} alt="transaction summary" />
      </Flex>
      <Center w="full" mb="24px">
        <Heading fontSize="18px" mb={3}>
          Coffee from Courtney Henrey
        </Heading>
        <Text fontSize="13px" color="brandGray.400">
          Processed
        </Text>
      </Center>
      <Box>
        <Flex alignItems="center" justifyContent="space-between" mb="21px">
          <Text color={Colors.gray400}>Amount</Text>
          <Text textAlign="right" color={Colors.primaryBlack}>
            1000
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mb="21px">
          <Text color={Colors.gray400}>Transaction type</Text>
          <Text textAlign="right" color={Colors.primaryBlack}>
            Buy me a Coffee
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mb="21px">
          <Text color={Colors.gray400}>Date</Text>
          <Text textAlign="right" color={Colors.primaryBlack}>
            Apr 04, 2022
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text color={Colors.gray400}>Reference</Text>
          <Text textAlign="right" color={Colors.primaryBlack}>
            59CchSKM5
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
export default TransactionSummary;
