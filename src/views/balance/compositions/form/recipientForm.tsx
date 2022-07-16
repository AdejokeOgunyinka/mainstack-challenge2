import React from 'react';
import { Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';
import { Link } from 'react-router-dom';
import { Input } from '../../../../components';

const RecipientForm = () => {
  return (
    <Box>
      <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text color={Colors.gray300} mb={'12px'} fontSize={'56px'}>
          $9,998.01
        </Text>
        <Text fontSize={'14px'}>
          + $1.99 (inc. withdrawal fee for free plan).
          <Text ml={'11px'} as={'span'} color={Colors.orange}>
            <Link to={'#'}>Upgrade to Pro</Link>
          </Text>
        </Text>
      </Flex>
      <form>
        <Stack my={5}>
          <Input
            label={'Recipient email address'}
            id="email"
            type="text"
            handleChange={() => ''}
          />
        </Stack>
        <Stack my={5}>
          <Input
            label={'Confirm recipient email address'}
            id="email"
            type="text"
            handleChange={() => ''}
          />
        </Stack>
        <Stack spacing={3}>
          <Text
            display={'flex'}
            justifyContent={'right'}
            as={'span'}
            fontSize={'14px'}
          >
            Save Details
            <Checkbox ml={'11px'} colorScheme="red" defaultChecked />
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default RecipientForm;
