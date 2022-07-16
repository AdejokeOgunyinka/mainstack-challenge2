import { Button as ChakraBtn, HStack, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../components';
import { Colors } from '../../../constants';
import { ReactComponent as Google } from '../../../assets/svgs/google.svg';
import { ReactComponent as Instagram } from '../../../assets/svgs/instagram.svg';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
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
      <Stack mt={3} mb={5}>
        <Link to={'/forgot-password'}>
          <Text color={Colors.orange} fontSize={'sm'}>
            Forgot Password?
          </Text>
        </Link>
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
            Log in
          </Text>
        </ChakraBtn>
      </Stack>
      <Stack mt={4} justifyContent={'center'}>
        <Text
          color={Colors.gray400}
          textAlign={'center'}
          fontSize={'14px'}
          mb={4}
        >
          OR
        </Text>
        <HStack justifyContent={'space-between'}>
          <ChakraBtn
            variant={'outline'}
            colorScheme="gray"
            fontSize={'14px'}
            h={{ base: '40px', md: '48px' }}
            minW={{ base: '161px', md: '244px' }}
            w={'full'}
            maxW={'244px'}
            borderRadius={'3xl'}
            leftIcon={<Google />}
          >
            <Text fontWeight={'lighter'} fontSize={'15px'}>
              {' '}
              Google
            </Text>
          </ChakraBtn>
          <ChakraBtn
            variant={'outline'}
            colorScheme="gray"
            fontSize={'14px'}
            h={{ base: '40px', md: '48px' }}
            minW={{ base: '161px', md: '244px' }}
            w={'full'}
            maxW={'244px'}
            borderRadius={'3xl'}
            leftIcon={<Instagram />}
          >
            Instagram
          </ChakraBtn>
        </HStack>
      </Stack>
      <Stack mt={5}>
        <Text textAlign={'center'} fontSize={'14px'}>
          Don’t have an account?{' '}
          <Link to={'/signup'}>
            <Text as={'span'} color={Colors.orange}>
              {' '}
              Sign up
            </Text>
          </Link>
        </Text>
      </Stack>
    </form>
  );
};

export default Login;
