import React from 'react';
import { Box } from '@chakra-ui/react';
import AppName from '../AppName';

const AddSocialMediaHandle: React.FC<{ selected: string[] }> = ({
  selected,
}) => {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      maxWidth={{ base: ' 335px', md: '504px' }}
    >
      <Box>
        {selected.map((el) => (
          <AppName selected={selected} name={el} />
        ))}
      </Box>
    </Box>
  );
};

export default AddSocialMediaHandle;
