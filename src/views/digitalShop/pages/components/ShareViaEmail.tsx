import { Box, Heading, Flex, Input, Text, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import Button from '../../../../components/Button';
/*  
  interface EmailInterface {
    onChangeContent: (content: CurrentContentEnum) => void;
  } */

const ShareViaEmail = () => {
  let [value, setValue] = useState('');

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Flex
        flexDirection="column"
        w="full"
        h="full"
        pt={'49px'}
        position="relative"
      >
        <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
          Email
        </Heading>
        <Input
          value={value}
          onChange={(e) => handleInputChange(e)}
          size="lg"
          borderRadius="8px"
        />
        <Text fontSize="14px" textColor="#4D5760">
          Press the comma to enter multiple emails.
        </Text>
        <Box position="absolute" bottom={'20px'} w="100%">
          <Button
            text={'Send Invite'}
            px={'1.5rem'}
            py={{ base: '12px', md: '16px' }}
            bg={'#E5E8F0'}
            color={'primaryBlack'}
            width={'full'}
            handleClick={() => console.log('clicked')}
            borderRadius="100px"
          />
        </Box>
        <Spacer h={{ base: '84px', md: '0' }} />
      </Flex>
    </>
  );
};
export default ShareViaEmail;
