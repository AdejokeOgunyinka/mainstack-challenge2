import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { IMailingListData } from 'store/slices/types';

interface IEditorMailListViewProps {
  data: IMailingListData;
}

export const EditorMailListView = ({ data }: IEditorMailListViewProps) => {
  const { value } = data;
  return (
    <Box>
      <Heading fontSize="24px" mb="4">{value.title}</Heading>
      <Text color="#4D5155" fontSize="14px">
        {value.description}
      </Text>
    </Box>
  );
};
