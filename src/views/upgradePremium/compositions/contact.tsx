import React from 'react';
import { Box, Text, Button as ChakraBtn, Flex } from '@chakra-ui/react';
import Colors from '../../../constants/Colors';

const ContactUs = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'24px'}
        borderRadius={'16px'}
        border={'1px solid #E5E8F0'}
        mt={'45px'}
      >
        <Box>
          <Text mb={'2px'} fontSize={'16px'}>
            Enterprise
          </Text>
          <Text fontSize={'48px'}>Lets talk</Text>
        </Box>
        <Box>
          <ChakraBtn
            color={Colors.white}
            bg={Colors.primaryBlack}
            width={'252px'}
            height={'48px'}
            borderRadius={'100px'}
          >
            <Text fontWeight={'light'} fontSize={'15px'}>
              Contact us
            </Text>
          </ChakraBtn>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUs;
