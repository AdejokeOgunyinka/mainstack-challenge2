import React from 'react';
import { Stack, Text, Heading, Link, Box } from '@chakra-ui/react';
import { IPdfBlockData } from 'store/slices/types';
import { PdfIcon } from 'components/Icons';


interface IEditorPdfViewProps {
  data: IPdfBlockData;
}

export const EditorPdfView = ({ data }: IEditorPdfViewProps) => {
  const { pdfs, header } = data.value;
  console.log(data);
  return (
    <Stack spacing={4}>
      <Heading size="sm">{header ?? ''}</Heading>
      {pdfs.map((pdf) => (
        <Link
          href={`${pdf.pdfBuffer}`}
          target="_blank"
          rel="noreferrer"
          key={pdf.id}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="primaryBlack"
          borderRadius="full"
          color="white"
          p="4"
          fontWeight="thin"
          fontSize="sm"
          w="full"
        >
          <Box w="20px"/>
          <Text>{pdf.pdfTitle}</Text>
          <Box>
          <PdfIcon color="white"/>

          </Box>
        </Link>
      ))}
    </Stack>
  );
};
