import React from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ReactComponent as Apple } from '../../../assets/svgs/apple.svg';
import { ReactComponent as MasterCard } from '../../../assets/svgs/masterCard.svg';
import { ReactComponent as VisaCard } from '../../../assets/svgs/visa.svg';
import { Input } from '../../../components';
import { Button as ChakraBtn } from '@chakra-ui/button/';
import Colors from '../../../constants/Colors';

const PremiumForm = () => {
  return (
    <Box width={'100%'} maxWidth={'836px'}>
      <Heading
        display={{ base: 'none', md: 'block' }}
        fontSize={'48px'}
        mb={'60px'}
      >
        Checkout
      </Heading>
      <form>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box>
            <Flex justifyContent={'space-between'}>
              <Text fontSize={'20px'}>Pay with Card</Text>
              <Flex>
                <Apple />
                <MasterCard />
                <VisaCard />
              </Flex>
            </Flex>
            <Stack
              my={3}
              minWidth={{ base: '335px', md: '246px' }}
              marginRight={'12px'}
            >
              <Input
                label="Cardholder Name"
                id="cardHolderName"
                placeholder="Enter Email Address"
                handleChange={() => ''}
              />
            </Stack>
            <Stack
              my={3}
              minWidth={{ base: '335px', md: '246px' }}
              marginRight={'12px'}
            >
              <Input
                label="Card Number"
                id="card Number"
                placeholder="E.g 998999900099"
                handleChange={() => ''}
              />
            </Stack>

            <Flex flexDirection={{ base: 'column', md: 'row' }} w={'100%'}>
              <Stack
                minWidth={{ base: '335px', md: '246px' }}
                marginRight={'12px'}
              >
                <Input
                  label="Expiration date (MM/YY)"
                  id="expiration"
                  placeholder="E.g 10/22"
                  handleChange={() => ''}
                />
              </Stack>
              <Stack
                minWidth={{ base: '335px', md: '246px' }}
                my={{ base: 5, md: 0 }}
              >
                <Input
                  label="CVV (3 digits)"
                  id="cvv"
                  placeholder="E.g 456"
                  handleChange={() => ''}
                />
              </Stack>
            </Flex>
          </Box>
          <Box ml={{ base: 0, md: '40px' }} width={'100%'} minWidth={'445px'}>
            <Box
              borderRadius={'10px 10px 0 0'}
              padding={'9px 24px'}
              color={Colors.white}
              bg={'#AA3802'}
            >
              <Text fontSize={'18px'}>Premium plan</Text>
            </Box>
            <Box
              border={'0.8px solid #D6D9E0'}
              borderRadius={'0 0 10px 10px'}
              padding={'0 24px'}
            >
              <Text
                mb={'16px'}
                display={'flex'}
                justifyContent={'space-between'}
              >
                1 user(s) <Text as={'span'}>$9 per month</Text>
              </Text>
              <Text
                mb={'16px'}
                display={'flex'}
                justifyContent={'space-between'}
              >
                Annual Savings <Text as={'span'}>-$0</Text>
              </Text>
              <Text
                paddingTop={'24px'}
                borderTop={' 0.5px solid #D6D9E0'}
                mb={'16px'}
                display={'flex'}
                justifyContent={'space-between'}
              >
                Total <Text as={'span'}>-$9</Text>
              </Text>
            </Box>
          </Box>
        </Flex>

        <Box mt={'72px'}>
          <Text mb={'36px'} fontSize={'20px'}>
            Contact Info
          </Text>
          <Stack minWidth={{ base: '335px', md: '246px' }} marginRight={'12px'}>
            <Input
              label="Billing Email Address "
              id="expiration"
              placeholder="E.g adegbulugbeisrael@gmail.com"
              handleChange={() => ''}
            />
          </Stack>
        </Box>
        <Box mt={'72px'}>
          <Text mb={'36px'} fontSize={'20px'}>
            Your location
          </Text>
          <Stack minWidth={{ base: '335px', md: '246px' }} marginRight={'12px'}>
            <Input
              label="Address "
              id="address"
              placeholder=" E.g 4th street bakers"
              handleChange={() => ''}
            />
          </Stack>
          <Stack minWidth={{ base: '335px', md: '246px' }} marginRight={'12px'}>
            <Input
              label="Zip code"
              id="zipCode"
              placeholder="E.g 308900"
              handleChange={() => ''}
            />
          </Stack>
        </Box>

        <Box mt={'66px'}>
          <Text fontSize={'16px'} color={Colors.primaryBlack}>
            We will automatically update your account balance if you change
            plans
          </Text>{' '}
          <Text mt={'16px'} fontSize={'12px'} color={Colors.gray400}>
            We will notify you a week before the upcoming payment
          </Text>
        </Box>

        <ChakraBtn
          mt={'48px'}
          variant={'outline'}
          fontSize={'14px'}
          maxW={{ base: '159px', md: '220px' }}
          w={'full'}
          h={'40px'}
          borderRadius={'3xl'}
          backgroundColor={'#131316'}
          color={'#FFFFFF'}
          type={'submit'}
        >
          Upgrade
        </ChakraBtn>
      </form>
    </Box>
  );
};

export default PremiumForm;
