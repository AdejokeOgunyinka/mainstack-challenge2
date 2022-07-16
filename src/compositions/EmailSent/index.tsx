import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Colors } from '../../constants';

const EmailSentText = () => {
  return (
    <Box mt={'24px'} maxW={'504px'}>
      <Text fontSize={'14px'}>
        Didnt see it ?{' '}
        <Link href="#">
          <Text color={Colors.orange} as={'span'}>
            Resend
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default EmailSentText;
