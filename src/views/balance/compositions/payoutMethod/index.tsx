import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactComponent as ArrowDown } from '../../../../assets/svgs/arrowDown.svg';
import Colors from '../../../../constants/Colors';
const payOutData = [
  {
    id: 1,
    name: 'Bank transfer',
    icon: <ArrowDown />,
    description: 'Available in United States and Canada only.',
  },
  {
    id: 2,
    name: 'Mainstack Virtual Card',
    icon: <ArrowDown />,
    description: 'This payout method works in all countries',
  },
  {
    id: 3,
    name: 'PayPal',
    icon: <ArrowDown />,
    description: 'Available in all PayPal Eligible Countries. ',
  },
  {
    id: 4,
    name: 'Paypal',
    icon: <ArrowDown />,
    description: 'Processed',
  },
  {
    id: 4,
    name: 'Zelle',
    icon: <ArrowDown />,
    description: 'Available in all Zelle Eligible Countries. ',
  },
  {
    id: 5,
    name: 'Lazerpay',
    icon: <ArrowDown />,
    description: 'Convert & Withdraw Funds in Cryptocurrency. ',
  },
  {
    id: 6,
    name: 'Vestipay',
    icon: <ArrowDown />,
    description: 'Dollar Virtual Card, Available in Nigeria & United States',
  },
];

const PayoutMethod = () => {
  return (
    <Box w={'100%'} border={'1px solid #E5E8F0'} padding={'20px'}>
      {payOutData.map((el) => (
        <Flex alignItems={'center'}>
          <Box mr={'22px'}>{el.icon}</Box>
          <Box>
            <Text fontSize={'16px'} color={Colors.primaryBlack}>
              {el.name}
            </Text>
            <Text color={Colors.gray400} fontSize={'12px'}>
              {el.description}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default PayoutMethod;
