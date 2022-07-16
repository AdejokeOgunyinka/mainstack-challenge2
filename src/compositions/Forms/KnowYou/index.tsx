import React, { useState } from 'react';
import { Box, Text, Heading, Stack, Flex } from '@chakra-ui/react';
import { Input } from '../../../components';
import { Button as ChakraBtn } from '@chakra-ui/react';
import { IHeader } from '../../../components/Header/types';
import { KnowYouT } from '../../../views/onboarding/pages/KnowYou';
import Select from '../../../components/Select';
import { ReactComponent as Info } from '../../../assets/launchpad/info.svg';

const KnowYouForm: React.FC<IHeader & KnowYouT> = ({ onUpdate }) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    titles: [],
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
    if (onUpdate) {
      onUpdate(1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mt={'38px'}>
        <Box marginBottom={'30px'}>
          <Heading fontSize={{ base: '24px', md: '48px' }}>
            Let’s get to know you
          </Heading>
          <Text lineHeight={'32px'} fontSize={'14px'}>
            Kindly claim your profile URL to get started.
          </Text>
        </Box>

        <Flex flexDirection={{ base: 'column', md: 'row' }} w={'100%'}>
          <Stack minWidth={{ base: '335px', md: '246px' }} marginRight={'12px'}>
            <Input
              label="First Name"
              id="firstName"
              isError={error}
              placeholder="Enter Email Address"
              handleChange={handleChange}
            />
          </Stack>
          <Stack
            minWidth={{ base: '335px', md: '246px' }}
            my={{ base: 5, md: 0 }}
          >
            <Input
              label="Last Name"
              id="lastName"
              isError={error}
              placeholder="Enter Email Address"
              handleChange={handleChange}
            />
          </Stack>
        </Flex>
        <Stack my={3}>
          <Input
            label={
              <Flex justifyContent={'space-between'}>
                Applicable titles <Info />{' '}
              </Flex>
            }
            id="applicableTitles"
            isError={error}
            placeholder="List up to three applicable titles"
            handleChange={handleChange}
          />
        </Stack>
        <Stack my={5}>
          <Select data={[]} label={'Country'} placeholder={'Select country'} />
        </Stack>

        <ChakraBtn
          variant={'outline'}
          fontSize={'14px'}
          minW={{ base: '159px', md: '246px' }}
          w={'full'}
          h={{ base: '40px', md: '48px' }}
          borderRadius={'3xl'}
          backgroundColor={'#131316'}
          color={'#FFFFFF'}
          type={'submit'}
          mt={'40px'}
        >
          <Text fontSize={'15px'} fontWeight={'lighter'}>
            Continue
          </Text>
        </ChakraBtn>
      </Box>
    </form>
  );
};

export default KnowYouForm;
