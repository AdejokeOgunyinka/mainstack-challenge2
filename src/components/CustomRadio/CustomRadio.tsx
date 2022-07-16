import { Box, Flex, useRadio } from '@chakra-ui/react';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomRadioButton = (props: any) => { // TODO: add proper type
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" cursor='pointer'>
      <input {...input} />
      <Flex alignItems='center'>
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth={1}
          h="18px"
          w="18px"
          borderRadius="full"
          mr="2"
          position='relative'
          display='grid'
          placeContent="center"
        
          _checked={{
            _after: {
                display: 'block'
            }
          }}
          _focus={{
            boxShadow: 'none',
          }}
          _after={{
            content:'""',
            h:"8px",
            w:"8px",
            bg: 'brandOrange',
            borderRadius:'full',
            display: 'none'
          }}
       />
        {props.children}
      </Flex>
    </Box>
  );
};
