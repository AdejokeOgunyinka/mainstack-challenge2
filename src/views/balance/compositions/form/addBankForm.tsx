import React from 'react';
import { Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Colors from '../../../../constants/Colors';
import Select from '../../../../components/Select';
import { Input } from '../../../../components';

const AddBankForm = () => {
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
            label={'Recipient account number'}
            id="accountNumber"
            type="text"
            handleChange={() => ''}
          />
        </Stack>
        <Stack spacing={3}>
          <Select
            placeholder={'Select bank'}
            label={'Transaction Type'}
            data={[]}
          />
        </Stack>
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          mt={'22px'}
        >
          <Text color={Colors.orange} fontSize={'14px'}>
            <Link to={'#'}>Choose a Bank Account</Link>
          </Text>
          <Stack spacing={3}>
            <Text
              fontSize={'14px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              Add to beneficiary
              <Checkbox
                ml={'8px'}
                size="md"
                colorScheme="#FF5403"
                defaultChecked
              />
            </Text>
          </Stack>
        </Flex>
      </form>
    </Box>
  );
};

export default AddBankForm;
