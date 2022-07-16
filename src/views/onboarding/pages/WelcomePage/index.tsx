import React from 'react';
import { Box, Text, Heading, Button } from '@chakra-ui/react';
import { AuthLayout } from '../../../../layouts';
import Header from '../../../../components/Header';
import { ReactComponent as Cheers } from '../../../../assets/svgs/cheers.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/svgs/rightArrow.svg';

const Welcome = () => {
  return (
    <AuthLayout
      content={
        <>
          <Header />
          <Box
            display={'flex'}
            justifyContent={{ base: 'justify', md: 'center' }}
            width={'100%'}
          >
            <Box>
              <Cheers style={{ marginBottom: '31px' }} />
              <Box maxWidth={{ base: '335px', md: '504px' }}>
                <Heading
                  marginBottom={'12px'}
                  fontSize={{ base: '24px', md: '48px' }}
                >
                  Welcome to Mainstack{' '}
                  <Text color={'#91989e'} as={'span'}>
                    Blessing !
                  </Text>{' '}
                </Heading>
              </Box>
              <Box width={'100%'} minWidth={{ base: '335px', md: '504px' }}>
                <Text fontSize={'14px'}>
                  Feels awesome to finally have you join doers from other 83
                  countries who use mainstack. Click the button below to proceed
                  to your dashboard .
                </Text>
              </Box>
              <Button
                borderRadius={'100px'}
                marginTop={'26px'}
                width={'100%'}
                maxWidth={'335px'}
                h={{ base: '40px', md: '48px' }}
                color={'white'}
                backgroundColor={'black'}
                rightIcon={<ArrowRight />}
                fontWeight={'lighter'}
              >
                <Text fontWeight={'lighter'} fontSize={'15px'}>
                  Proceed
                </Text>
              </Button>
            </Box>
          </Box>
        </>
      }
    />
  );
};

export default Welcome;
