import React, { useState } from 'react';
import { Input } from '../../../components';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { Button as ChakraBtn } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { ReactComponent as Google } from '../../../assets/svgs/google.svg';
import { ReactComponent as Instagram } from '../../../assets/svgs/instagram.svg';
import { Colors } from '../../../constants';
import UsernameInput from '../../../components/UsernameInput';

const SignUp = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
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
      <Stack my={5}>
        <UsernameInput label={'Username'} handleChange={handleChange} />
      </Stack>
      <Stack my={5}>
        <Input
          label="Email"
          id="email"
          isError={error}
          placeholder="Enter Email Address"
          handleChange={handleChange}
        />
      </Stack>
      <Stack my={5}>
        <Input
          label="Password"
          id="password"
          isError={error}
          placeholder="Enter Password"
          show={show}
          type="password"
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </Stack>
      <Stack my={5}>
        <Input
          label="Date of Birth"
          id={'dob'}
          type={'date'}
          isError={error}
          placeholder=""
          handleChange={handleChange}
        />
      </Stack>
      <Stack mt={6} mb={3}>
        <ChakraBtn
          variant={'outline'}
          colorScheme="gray"
          fontSize={'14px'}
          h={{ base: '40px', md: '48px' }}
          bg={Colors.primaryBlack}
          color={Colors.white}
          minW={{ base: '161px', md: '244px' }}
          w={'full'}
          maxW={'504px'}
          borderRadius={'3xl'}
        >
          <Text fontSize={'15px'} fontWeight={'lighter'}>
            Sign Up
          </Text>
        </ChakraBtn>
      </Stack>
      <Stack marginBottom={'24px'} mt={4} justifyContent={'center'}>
        <Text
          fontWeight={'lighter'}
          color={Colors.gray400}
          textAlign={'center'}
          fontSize={'15px'}
          mb={4}
        >
          OR
        </Text>
        <HStack justifyContent={'space-between'}>
          <ChakraBtn
            variant={'outline'}
            colorScheme="gray"
            fontSize={'14px'}
            h={'48px'}
            minW={{ base: '161px', md: '244px' }}
            borderRadius={'3xl'}
            leftIcon={<Google />}
          >
            Google
          </ChakraBtn>
          <ChakraBtn
            variant={'outline'}
            colorScheme="gray"
            fontSize={'14px'}
            h={'48px'}
            minW={{ base: '161px', md: '244px' }}
            borderRadius={'3xl'}
            leftIcon={<Instagram />}
          >
            Instagram
          </ChakraBtn>
        </HStack>
      </Stack>
      <Box marginBottom={'28px'}>
        <Text fontSize={'14px'}>
          By continuing with Google, Apple, or Email, you agree to
          <Text color={'#FF5403'} as={'span'}>
            {' '}
            Mainstack’s Terms of Service and Privacy Policy.
          </Text>
        </Text>
      </Box>
      <Box>
        <Text align={'center'} fontSize={'14px'}>
          Got an account?
          <Link marginLeft={'4px'} color="#FF5403" href="/login">
            Log in
          </Link>
        </Text>
      </Box>
    </form>
  );
};

export default SignUp;
