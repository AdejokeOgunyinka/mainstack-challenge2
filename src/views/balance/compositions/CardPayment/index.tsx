import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { Button } from '../../../../components';
import Colors from '../../../../constants/Colors';

const CardPayment = () => {
  return (
    <Box>
      <Text mb={'40px'} color={Colors.gray400} fontSize={'16px'}>
        Please note that an additonal fee of{' '}
        <Text as={'span'} fontWeight={'bold'}>
          $2
        </Text>{' '}
        would be deducted for card creation from your Mainstack available
        balance.
      </Text>
      <Button
        width={'100%'}
        color={Colors.primaryBlack}
        border={' 1px solid #E5E8F0'}
        bg={Colors.white}
        h={{ base: '40px', md: '48px' }}
        text={'Pay via my Mainstack Balance'}
      />
    </Box>
  );
};

export default CardPayment;
