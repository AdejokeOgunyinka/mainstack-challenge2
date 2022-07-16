import React, { useState } from 'react';
import { Input } from '../../../components';
import { HStack, Stack } from '@chakra-ui/react';
import { Button as ChakraBtn, Text } from '@chakra-ui/react';
import Colors from '../../../constants/Colors';

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: '',
  });

  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
    if (e.target.value === '') setError(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack my={5}>
        <Input
          label="Email"
          id="email"
          isError={error}
          placeholder="Enter Email Address"
          handleChange={handleChange}
        />
      </Stack>
      <HStack mt={'32px'} justifyContent={'space-between'}>
        <ChakraBtn
          variant={'outline'}
          colorScheme="gray"
          fontSize={'14px'}
          minW={{ base: '162px', md: '246px' }}
          h={{ base: '40px', md: '48px' }}
          borderRadius={'3xl'}
          backgroundColor={Colors.gray100}
        >
          <Text fontWeight={'lighter'} fontSize={'15px'}>
            Back
          </Text>
        </ChakraBtn>
        <ChakraBtn
          variant={'outline'}
          colorScheme="gray"
          fontSize={'14px'}
          h={{ base: '40px', md: '48px' }}
          minW={{ base: '162px', md: '246px' }}
          borderRadius={'3xl'}
          backgroundColor={Colors.black}
          color={Colors.white}
        >
          <Text fontWeight={'lighter'} fontSize={'15px'}>
            {' '}
            Submit
          </Text>
        </ChakraBtn>
      </HStack>
    </form>
  );
};

export default ForgotPassword;
