import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Text,
  InputLeftElement,
  // InputRightElement,
} from '@chakra-ui/react';
import { IInput } from '../Input/types';
import Colors from '../../constants/Colors';

const UsernameInput: React.FC<IInput> = ({
  label,
  handleChange,
  // handleClick,
  id,
  isError,
  placeholder,
  value,
}) => {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Text>mainstack.me/</Text>}
          sx={{
            width: '140px',
            color: Colors.gray400,
            height: '100%',
          }}
        />
        <Input
          fontSize={'14px'}
          size={'lg'}
          _focusVisible={{
            border: `1px solid ${Colors.orange}`,
            boxShadow: '0px 0px 0px 2px #FFEEE7',
          }}
          sx={{ paddingInlineStart: '123px' }}
          id={id}
          value={value}
          type={'text'}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {/*<InputRightElement children={<CheckIcon color="green.500" />} />*/}
      </InputGroup>
      {isError && <FormErrorMessage>{id} is required</FormErrorMessage>}
    </FormControl>
  );
};

export default UsernameInput;
