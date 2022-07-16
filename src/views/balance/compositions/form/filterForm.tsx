import React from 'react';
import Select from '../../../../components/Select';
import { HStack, Stack } from '@chakra-ui/react';
import { Button as ChakraBtn } from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';

const FilterForm = () => {
  return (
    <form>
      <Stack spacing={3}>
        <Select label={'Date'} data={[]} />
      </Stack>
      <Stack spacing={3}>
        <Select label={'Status'} data={[]} />
      </Stack>
      <Stack spacing={3}>
        <Select label={'Transaction Type'} data={[]} />
      </Stack>
      <HStack mt={'24px'} justifyContent={'space-between'}>
        <ChakraBtn
          variant={'outline'}
          colorScheme="gray"
          fontSize={'14px'}
          minW={{ base: '162px', md: '246px' }}
          borderRadius={'3xl'}
          backgroundColor={Colors.gray100}
          h={'40px'}
        >
          Clear
        </ChakraBtn>
        <ChakraBtn
          variant={'outline'}
          colorScheme="gray"
          fontSize={'14px'}
          minW={{ base: '162px', md: '246px' }}
          borderRadius={'3xl'}
          backgroundColor={Colors.black}
          color={Colors.white}
          h={'40px'}
        >
          Filter
        </ChakraBtn>
      </HStack>
    </form>
  );
};

export default FilterForm;
