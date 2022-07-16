import { Textarea, FormControl, FormLabel, Text } from '@chakra-ui/react';
import React from 'react';
import { ITextarea } from './types';

const TextareaComponent: React.FC<ITextarea> = ({
  label,
  id,
  placeholder,
  size,
  isRequired,
  value,
  handleChange,
  count,
}) => {
  return (
    <>
      <FormControl position={`${count ? 'relative' : 'unset'}`}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Textarea
          id={id}
          paddingRight={{
            lg: `${count ? '4.5rem' : 'unset'}`,
            md: `${count ? '4.5rem' : 'unset'}`,
            sm: `${count ? '4.5rem' : 'unset'}`,
            base: `${count ? '4.5rem' : 'unset'}`,
          }}
          placeholder={placeholder && placeholder}
          size={size}
          resize="none"
          value={
            !count
              ? value
              : value.length > count
              ? value.substring(0, count)
              : value
          }
          isRequired={isRequired}
          onChange={handleChange}
        />
        {count && (
          <Text
            fontSize={'0.8rem'}
            right={'20px'}
            top={'40px'}
            position="absolute"
          >
            {count - value.length < 0 ? 0 : count - value.length}/{count}
          </Text>
        )}
      </FormControl>
    </>
  );
};

export default TextareaComponent;
