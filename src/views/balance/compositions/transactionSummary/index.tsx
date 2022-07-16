import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactComponent as ArrowDown } from '../../../../assets/svgs/arrowDown.svg';
import Colors from '../../../../constants/Colors';

const transactionData = [
  {
    id: 1,
    objectKey: 'Amount',
    objectValue: '$1000',
  },
  {
    id: 2,
    objectKey: 'Transaction type',
    objectValue: 'Buy me a coffee',
  },
  {
    id: 3,
    objectKey: 'Date',
    objectValue: 'Apr 04, 2022',
  },
  {
    id: 3,
    objectKey: 'Reference',
    objectValue: '59CchSKM5',
  },
];

const TransactionSummary = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
      <Box textAlign={'center'} margin={'auto'}>
        <ArrowDown style={{ display: 'inline' }} />
        <Heading fontSize={'18px'}>Coffee from Courtney Henrey </Heading>
        <Text fontSize={'13px'}> Processed</Text>
      </Box>

      <Box>
        {transactionData.map((el) => (
          <Flex mb={'24px'} key={el.id} justifyContent={'space-between'}>
            <Text color={Colors.gray400} fontSize={'16px'} as={'span'}>
              {el.objectKey}
            </Text>{' '}
            <Text color={Colors.primaryBlack} fontSize={'16px'} as={'span'}>
              {el.objectValue}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default TransactionSummary;
