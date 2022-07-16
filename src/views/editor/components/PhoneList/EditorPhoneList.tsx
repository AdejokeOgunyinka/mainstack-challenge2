import {
  Accordion,
  AccordionItem,
  Flex,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IPhoneNumber } from 'store/slices/types';

interface IEditorPhoneListProps {
    onChange: (data: IPhoneNumber) => void
}

export const EditorPhoneList = ({onChange}:IEditorPhoneListProps) => {
  const [data, setData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    onChange(data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])

  return (
    <Accordion allowMultiple bg="white" marginBottom="4">
      <AccordionItem
        className="accordion"
        borderRadius="lg"
        borderWidth={1}
        bg="white"
      >
        <AccordionButton h="64px">
          <Flex flex="1" textAlign="left">
            <Text>Phone Number List Basic Details</Text>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor={`Title`}>Title</FormLabel>
              <Input
                id={`Title`}
                type="text"
                name="title"
                onChange={handleChange}
                value={data.title}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor={`Description`}>
                Description (optional)
              </FormLabel>
              <Textarea id={`Description`} name="description"  onChange={handleChange} />
            </FormControl>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
