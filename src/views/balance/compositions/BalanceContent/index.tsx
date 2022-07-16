import React from 'react';
import {
  Box,
  Flex,
  Heading,
  LinkBox,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Button } from '../../../../components';
import Colors from '../../../../constants/Colors';

import { ReactComponent as ArrowUp } from '../../../../assets/svgs/arrowUp.svg';
import { ReactComponent as ArrowDown } from '../../../../assets/svgs/arrowDown.svg';
import { ReactComponent as Upload } from '../../../../assets/svgs/upload.svg';

const balanceFeatures = [
  {
    id: 1,
    name: 'Total Payout',
    amount: '$30,000.00',
  },
  {
    id: 2,
    name: 'Total Revenue',
    amount: '$40,000.00',
  },
  {
    id: 3,
    name: 'Pending Transaction',
    amount: '$0.00',
  },
];
const transactionData = [
  {
    id: 1,
    name: 'Coffee from Courtney Henrey',
    icon: <ArrowDown />,
    stats: 'Processed',
    amount: '$1000',
    date: 'Apr 04, 2022',
  },
  {
    id: 2,
    name: 'Digital product Payment from Josiah Smith',
    icon: <ArrowDown />,
    stats: 'Processed',
    amount: '$1000',
    date: 'Apr 04, 2022',
  },
  {
    id: 3,
    name: 'Masterclass Payment from Blessing Agbamoro',
    icon: <ArrowDown />,
    stats: 'Processed',
    amount: '$1000',
    date: 'Apr 04, 2022',
  },
  {
    id: 4,
    name: 'Cash Withdrawal to Bank Account',
    icon: <ArrowUp />,
    stats: 'Not Processed',
    amount: '$1000',
    date: 'Apr 04, 2022',
  },
];

const BalanceContent = () => {
  return (
    <Box w={'100%'}>
      <Flex
        borderRadius={'12px'}
        border={'1px solid #E5E8F0'}
        justifyContent={'space-between'}
        padding={'40px'}
      >
        <Box>
          <Heading color={Colors.black} mb={'32px'} fontSize={'16px'}>
            Available Balance
          </Heading>
          <Text color={Colors.black} mb={'40px'} fontSize={'32px'}>
            $10,000.00
          </Text>

          <Button
            width={'100%'}
            // w={{ base: '287px', md: '360px' }}
            bg={Colors.black}
            h={{ base: '40px', md: '48px' }}
            text={'Withdraw'}
          />

          <Box width={'360px'}>
            {balanceFeatures.map((el, index) => (
              <Flex
                justifyContent={'space-between'}
                color={Colors.primaryBlack}
                fontSize={'14px'}
                mt={'12px'}
                key={index}
              >
                <Text as={'span'}>{el.name}</Text>
                <Text as={'span'} fontWeight={'lighter'}>
                  {el.amount}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
        <Box>Graph</Box>
      </Flex>
      <>
        <Box mt={'32px'}>
          <Flex mb={'24px'} justifyContent={'space-between'}>
            <Heading fontSize={'18px'}>32 Transactions</Heading>
            <Flex alignItems={'center'}>
              <LinkBox
                w={'149px'}
                border={'1px solid #E5E8F0'}
                minW={'149px'}
                fontSize={'15px'}
                borderRadius={'100px'}
                mr={'16px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                h={'40px'}
              >
                Export CSV <Upload style={{ display: 'inline' }} />
              </LinkBox>
              <Stack spacing={3}>
                <Select
                  width={'98px'}
                  borderRadius={'100px'}
                  placeholder="Filter"
                  size="lg"
                />
              </Stack>
            </Flex>
          </Flex>
          {transactionData.map((el) => (
            <Flex justifyContent={'space-between'}>
              <Flex mb={'20px'}>
                <>{el.icon}</>
                <Text ml={'12px'}>
                  <Text fontSize={'16px'} as={'span'}>
                    {el.name}
                  </Text>
                  <Text fontSize={'13px'}>{el.stats}</Text>
                </Text>
              </Flex>
              <Box>
                <Text fontSize={'16px'}>{el.amount}</Text>
                <Text fontSize={'13px'}>{el.date}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </>
    </Box>
  );
};

export default BalanceContent;
