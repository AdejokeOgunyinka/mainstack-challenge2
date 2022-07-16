import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Button as ChakraBtn,
} from '@chakra-ui/react';
import Header from '../../../../components/Header';
import { AuthLayout } from '../../../../layouts';
import { IHeader } from '../../../../components/Header/types';
import Colors from '../../../../constants/Colors';

const VerifyEmail: React.FC<IHeader> = () => {
  return (
    <AuthLayout
      content={
        <Flex justifyContent={'center'} h={'full'}>
          <Header auth />
          <Flex
            height={'70vh'}
            justifyContent={{ md: 'center' }}
            flexDir={'column'}
            maxW="2xl"
          >
            <Box mt={'70px'}>
              <Box marginBottom={'20px'}>
                <Heading
                  color={'#131316'}
                  fontSize={{ base: '24px', md: '48px' }}
                >
                  Please verify your email
                </Heading>
                <Heading
                  color={'#91989E'}
                  fontSize={{ base: '24px', md: '48px' }}
                >
                  blessingdaniels@gmail.com
                </Heading>
              </Box>
              <Box>
                <Text
                  marginBottom={'8px'}
                  lineHeight={'22px'}
                  color={Colors.primaryBlack}
                  fontSize={'14px'}
                >
                  We have sent an email to you. Kindly follow the instructions
                  to continue.
                </Text>
                <Text color={Colors.primaryBlack} fontSize={'14px'}>
                  Wrong email address?{' '}
                  <Text as={'span'} color={'#FF5403'}>
                    Change it
                  </Text>
                </Text>
              </Box>
              <HStack
                width={{ base: 'unset', md: '412px' }}
                marginTop={'26px'}
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent={{ base: 'center', md: 'space-between' }}
                alignItems={'center'}
              >
                <ChakraBtn
                  variant={'outline'}
                  colorScheme="gray"
                  fontSize={'15px'}
                  minW={{ base: '335px', md: '200px' }}
                  width={'100%'}
                  h={{ base: '40px', md: '48px' }}
                  borderRadius={'3xl'}
                  marginBottom={{ base: '16px', md: 'unset' }}
                  fontWeight={'lighter'}
                >
                  Resend Link
                </ChakraBtn>

                <ChakraBtn
                  variant={'outline'}
                  colorScheme="gray"
                  fontSize={'15px'}
                  minW={{ base: '335px', md: '200px' }}
                  width={'100%'}
                  h={{ base: '40px', md: '48px' }}
                  borderRadius={'3xl'}
                  fontWeight={'lighter'}
                >
                  Go to login
                </ChakraBtn>
              </HStack>
            </Box>
          </Flex>
        </Flex>
      }
    />
  );
};

export default VerifyEmail;
