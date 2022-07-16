import {
  Flex,
  chakra,
  Heading,
  Text,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../../../constants';
import { faSvg } from 'assets/images';

const TwoFAModal = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems={'center'}
        justifyContent="center"
      >
        <chakra.img src={faSvg} alt="2FA" marginY={'1rem'} />
        <Heading
          as="h2"
          color={Colors.black}
          fontSize="large"
          fontWeight="bold"
        >
          Enter code sent to your registered email
        </Heading>
        <Heading
          mt={'0.7rem'}
          as="h2"
          color={Colors.gray300}
          fontSize={'medium'}
        >
          blessingdaniells@gmail.com
        </Heading>
        <HStack my={'1rem'}>
          <PinInput size="md">
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Text fontWeight={'normal'} textColor={Colors.gray400} fontSize="sm">
          Didn't get any code?{' '}
          <span style={{ color: `${Colors.orange}` }}>Resend Code</span>
        </Text>
      </Flex>
    </>
  );
};

export default TwoFAModal;
