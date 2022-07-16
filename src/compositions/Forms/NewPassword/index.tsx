import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { Input } from '../../../components';
import { Button as ChakraBtn, Text } from '@chakra-ui/react';

const NewPassword = () => {
  const [values, setValues] = useState({
    newPassword: '',
  });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
      <Stack mt={'30px'}>
        <Input
          label="New Password"
          id="newPassword"
          isError={error}
          placeholder="Enter Password"
          show={show}
          type="password"
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </Stack>

      <ChakraBtn
        mt={'32px'}
        variant={'outline'}
        colorScheme="gray"
        fontSize={'14px'}
        minW={'504px'}
        h={{ base: '40px', md: '48px' }}
        borderRadius={'3xl'}
        backgroundColor={'#131316'}
        color={'#FFFFFF'}
      >
        <Text fontWeight={'lighter'} fontSize={'15px'}>
          Confirm
        </Text>
      </ChakraBtn>
    </form>
  );
};

export default NewPassword;
