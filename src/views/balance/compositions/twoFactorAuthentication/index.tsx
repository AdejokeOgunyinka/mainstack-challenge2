import React from 'react';
import { Box, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react';
import { Colors } from '../../../../constants';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components';

const TwoFactorAuthentication = () => {
  return (
    <Box textAlign={'center'}>
      <Text mb={'8px'} fontSize={'24px'}>
        Enter code sent to your registered email
      </Text>
      <Text color={Colors.gray300} fontSize={'24px'}>
        blessingdaniells@gmail.com
      </Text>

      <HStack display={'flex'} justifyContent={'center'} mt={'32px'}>
        <PinInput type="alphanumeric" mask>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <Text mt={'28px'} fontSize={'14px'}>
        Didnt get any code?
        <Text as={'span'} color={Colors.orange}>
          <Link to={'#'}>Resend code</Link>
        </Text>{' '}
      </Text>
      <Button h={{ base: '40px', md: '48px' }} width={'100%'} bg={Colors.black}>
        Confirm
      </Button>
    </Box>
  );
};

export default TwoFactorAuthentication;
