import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';
import { Button } from '../../../../components';
import { ReactComponent as VirtualCard } from '../../../../assets/svgs/virtualCard.svg';

const virtualCardData = [
  {
    id: 1,
    name: 'Be limitless, Be Global.',
    description:
      'Use MainCard anywhere MasterCard is accepted. One-click withdrawal from your Balance on Mainstack. Fund with your Local Currency, Receive USD',
  },
  {
    id: 2,
    name: 'Transparent & Secure.',
    description:
      'No monthly fee, No credit history needed. Your Card, Your Terms',
  },
  {
    id: 3,
    name: 'Instant Currency Exchange.',
    description:
      'Use your MainCard to fund your local remittance apps, to receive your earnings in your local currency. ',
  },
];

const CreateVirtualCard = () => {
  return (
    <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box margin={'auto'} mb={'33px'}>
        <VirtualCard />
      </Box>
      <Box>
        {virtualCardData.map((el) => (
          <Box key={el.id}>
            <Text color={Colors.primaryBlack} mb={'12px'} fontSize={'18px'}>
              {el.name}
            </Text>
            <Text color={Colors.gray400} mb={'32px'} fontSize={'14px'}>
              {el.description}
            </Text>
          </Box>
        ))}
      </Box>

      <Button
        width={'100%'}
        bg={Colors.black}
        h={{ base: '40px', md: '48px' }}
        text={'Proceed'}
      />
    </Flex>
  );
};

export default CreateVirtualCard;
