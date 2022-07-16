import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { IInput } from './types';

const NumberInputComponent: React.FC<IInput> = ({
  label,
  handleChange,
  handleClick,
  id,
  isError,
  min,
  max,
  value,
  stepper,
}) => {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <NumberInput
        id={id}
        // value={value || ''}
        size={'lg'}
        width={'100%'}
        min={min}
        max={max}
        onChange={handleChange}
      >
        <NumberInputField id={id} />
        {stepper && (
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        )}
      </NumberInput>
      {isError && <FormErrorMessage>Required</FormErrorMessage>}
    </FormControl>
  );
};

export default NumberInputComponent;
