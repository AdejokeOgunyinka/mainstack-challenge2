import React, { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Box,
  Heading,
  Flex,
  Switch,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

import { CustomRadioGroup, CustomRadioOption } from 'components';

const MailOptions: CustomRadioOption[] = [
  {
    id: '1',
    label: 'Mainstack',
    value: 'Mainstack',
  },
  {
    id: '2',
    label: 'Mailchimp',
    value: 'Mailchimp',
  },
];


interface IEditorMailListProps {
    onChange: (data: any) => void
}

export const EditorMailList = ({onChange}: IEditorMailListProps) => {
    const {values, handleChange, setFieldValue} = useFormik({
        initialValues: {
            title:  '',
            description: '',
            infoDestination: '',
            isLegalInfo: false,
        },
        onSubmit: (values) => {
            console.info(values)
        }
    })

    useEffect(() => {
        onChange(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[values])

  return (
    <Stack spacing={8}>
      <Box borderWidth={1} p="4" borderRadius="lg">
        <Heading size="sm" mb="5">
          Basic details
        </Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor={`Title`}>Title</FormLabel>
            <Input
              id={`Title`}
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`Description`}>
              Description (optional)
            </FormLabel>
            <Textarea
              id={`Description`}
              name="description"
              onChange={handleChange}
              value={values.description}
            />
          </FormControl>
        </Stack>
      </Box>
      <Box borderWidth={1} p="4" borderRadius="lg">
        <Heading size="sm" mb="5">
          Information destination
        </Heading>
        <CustomRadioGroup
          options={MailOptions}
          name="infoDestination"
          onChange={(val) => setFieldValue('infoDestination', val)}
          containerStyles={{
            direction: 'row',
          }}
        />
      </Box>

      <Flex
        borderWidth={1}
        p="4"
        borderRadius="lg"
        justifyContent="space-between"
        w="full"
        alignItems='center'
      >
        <Heading size="sm">Custom legal info</Heading>

        <Switch size="sm" name='isLegalInfo' value={+values.isLegalInfo} onChange={handleChange} />
      </Flex>
    </Stack>
  );
};
