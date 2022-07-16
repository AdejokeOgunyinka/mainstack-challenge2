import {
  InputGroup,
  Input,
  InputRightElement,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import { ViewOffIcon } from '@chakra-ui/icons';
import { IInput } from './types';
import Colors from '../../constants/Colors';
import { ReactComponent as ViewIcon } from '../../assets/svgs/viewIcon.svg';

const InputComponent: React.FC<IInput> = ({
  label,
  handleChange,
  handleClick,
  id,
  isError,
  type,
  placeholder,
  show,
  value,
}) => {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup width={'100%'}>
        <Input
          fontSize={'14px'}
          size={'lg'}
          _focusVisible={{
            border: `1px solid ${Colors.orange}`,
            boxShadow: '0px 0px 0px 2px #FFEEE7',
          }}
          id={id}
          value={value}
          type={type === 'password' && !show ? 'password' : 'text'}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {type === 'password' && (
          <InputRightElement>
            <Box mt={'10px'} onClick={handleClick}>
              {show ? (
                <ViewOffIcon style={{ color: '#91989E' }} />
              ) : (
                <ViewIcon style={{ color: '#91989E' }} />
              )}
            </Box>
          </InputRightElement>
        )}
      </InputGroup>
      {isError && <FormErrorMessage>{id} is required</FormErrorMessage>}
    </FormControl>
  );
};

export default InputComponent;
