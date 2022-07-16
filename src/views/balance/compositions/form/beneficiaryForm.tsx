import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Colors from '../../../../constants/Colors';
import Select from '../../../../components/Select';

const BeneficiaryForm = () => {
  return (
    <Box>
      <Box>
        <Text mb={'12px'} fontSize={'56px'}>
          $9,998.01
        </Text>
        <Text>
          + $1.99 (inc. withdrawal fee for free plan)
          <Link color={Colors.orange} to={'#'}>
            Upgrade to Pro
          </Link>
        </Text>
      </Box>
      <form>
        <Stack spacing={3}>
          <Select
            placeholder={'choose a beneficiary'}
            label={'Beneficiary'}
            data={[]}
          />
        </Stack>
        <Text mt={'22px'} color={Colors.orange} fontSize={'14px'}>
          <Link to={'#'}>Add bank</Link>
        </Text>
      </form>
    </Box>
  );
};

export default BeneficiaryForm;
