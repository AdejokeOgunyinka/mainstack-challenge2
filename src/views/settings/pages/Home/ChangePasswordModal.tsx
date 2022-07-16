import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Input } from 'components';
import { Colors } from '../../../../constants';

const ChangePasswordModal = () => {
  return (
    <>
      <Box pt="1rem">
        <Flex
          flexDirection="column"
          alignItems={'center'}
          justifyContent="center"
          maxWidth={'600px'}
          mx="auto"
        >
          <Box mb="1rem" w={'100%'}>
            <Input
              label="Old password"
              handleChange={(e: any) => {
                console.log('clicked');
              }}
              id="oldPass"
              type="password"
              placeholder="Password"
            />
          </Box>
          <Box mb="1rem" w={'100%'}>
            <Input
              label="New password"
              handleChange={(e: any) => {
                console.log('clicked');
              }}
              id="newPass"
              type="password"
              placeholder="Password"
            />
          </Box>
          <Box mb="1rem" w={'100%'}>
            <Input
              label="Confirm new password"
              handleChange={(e: any) => {
                console.log('clicked');
              }}
              id="confirmPass"
              type="password"
              placeholder="Password"
            />
          </Box>
          <Text
            textAlign={'center'}
            my="0.2rem"
            fontWeight={'normal'}
            textColor={Colors.gray400}
            fontSize="sm"
          >
            Your password must be at least 8 characters long. Avoid common words
            or patterns.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default ChangePasswordModal;
