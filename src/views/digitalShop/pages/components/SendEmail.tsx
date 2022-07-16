import { Box, Heading, Input, Textarea, Text } from '@chakra-ui/react';
import Button from 'components/Button';
import Colors from 'constants/Colors';
import { useState } from 'react';

const SendEmail = () => {
  let [value, setValue] = useState('');

  let handleInputChange: any = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Box
      w="100%"
      css={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Text mb="20px" color="#4D5760" fontSize="14px" textAlign="center">
        You can send messages to your customers email to inform them of any
        updates
      </Text>
      <Box mb={{ base: '16px', md: '24px' }}>
        <Heading fontSize={'14px'} mb="12px" textColor={Colors.primaryBlack}>
          Title
        </Heading>
        <Input
          value={value}
          _focus={{ border: '1px solid #FF5403' }}
          onChange={(e: any) => handleInputChange(e)}
          placeholder="E.g Marketing"
          size="lg"
          sx={{ '&::placeholder': { fontSize: '14px' } }}
          borderRadius="8px"
        />
      </Box>
      <Box mb={{ base: '16px', md: '24px' }}>
        <Heading
          fontSize={'14px'}
          mt="24px"
          mb="12px"
          textColor={Colors.primaryBlack}
        >
          Message to Customers
        </Heading>
        <Textarea
          value={value}
          _focus={{ border: '1px solid #FF5403' }}
          pt="14px"
          pl="16px"
          height="120px"
          fontSize="sm"
          textColor={Colors.primaryBlack}
          onChange={(e: any) => handleInputChange(e)}
          size="xl"
          sx={{ '&::placeholder': { fontSize: '14px' } }}
        />
      </Box>
      <Box position="absolute" bottom={'84px'} w="100%">
        <Button
          text={'Send email'}
          px={'1.5rem'}
          py={{ base: '12px', md: '16px' }}
          bg={Colors.primaryBlack}
          color={'white'}
          width={'full'}
          borderRadius="100px"
          handleClick={() => console.log('Button clicked')}
        />
      </Box>
      {/* 
          _focus={{ border: '1px solid #FF5403' }}
     */}
    </Box>
  );
};
export default SendEmail;
