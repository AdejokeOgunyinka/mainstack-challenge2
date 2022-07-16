import React from 'react';
import { Button, Input } from '../../../components';
import { Stack } from '@chakra-ui/react';

const AppForm = () => {
  return (
    <form>
      <Stack spacing={3}>
        <Input label={'Facebook pixel code'} handleChange={() => ''} />
      </Stack>
      <Stack mt={8}>
        <Button
          h={'40px'}
          placeholder={'enter code'}
          width={'100%'}
          text={'save'}
        />
      </Stack>
    </form>
  );
};

export default AppForm;
