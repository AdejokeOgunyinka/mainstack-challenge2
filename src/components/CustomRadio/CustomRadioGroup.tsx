import React from 'react';
import { Stack, useRadioGroup, Text, StackProps, TextProps } from '@chakra-ui/react';
import { CustomRadioButton } from './CustomRadio';

export type CustomRadioOption = { value: string; label: string; id: string }

interface ICustomRadioGroupProps {
  onChange: (value: string) => void;
  options: CustomRadioOption[];
  containerStyles?: StackProps;
  labelStyles?: TextProps;
  name: string;
}

export const CustomRadioGroup = ({
  onChange,
  options,
  containerStyles,
  labelStyles,
  name
}: ICustomRadioGroupProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: '',
    onChange,
  });

  const group = getRootProps();

  return (
    <Stack spacing={4} {...group} {...containerStyles}>
      {options.map(({ id, label, value }) => {
        const radio = getRadioProps({ value: value });
        return (
          <CustomRadioButton key={id} {...radio}>
            <Text fontSize='sm' fontWeight='thin' {...labelStyles}>{label}</Text>
          </CustomRadioButton>
        );
      })}
    </Stack>
  );
};
