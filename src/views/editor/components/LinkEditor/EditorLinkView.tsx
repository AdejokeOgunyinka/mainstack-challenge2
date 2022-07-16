import React from 'react';
import { Button, Stack, Text, Image } from '@chakra-ui/react';
import { LinkEditorData } from 'store/slices/types';
import { linkIcon } from 'assets/svgs';

interface IEditoRLinkViewProps {
  data: LinkEditorData;
}

export const EditorLinkView = ({ data }: IEditoRLinkViewProps) => {
  return (
    <Stack spacing={4}>
      {data.value.map((link) => (
        <Button
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg='primaryBlack'
          borderRadius="full"
          color="white"
          p="4"
          fontWeight='thin'
          fontSize='sm'
        >
          <Text>{link.title}</Text>
          <Image src={linkIcon} />
        </Button>
      ))}
    </Stack>
  );
};
