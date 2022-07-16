import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { PhoneNumberInput } from 'components/PhoneInput';
import React from 'react';
import { IPhoneNumberData } from 'store/slices/types';

interface IEditorPhoneListViewProps {
  data: IPhoneNumberData;
}

export const EditorPhoneListView = ({ data }: IEditorPhoneListViewProps) => {
  const { value } = data;
  return (
    <Stack spacing={6}>
      <Heading fontSize="24px">{value.title}</Heading>
      <Text color="#4D5155" fontSize="14px">
        {value.description}
      </Text>

      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
         <PhoneNumberInput value="" onChange={(val) => console.log('val', val)} />
        </FormControl>
      </Stack>
    </Stack>
  );
};
