import { encodeImageFileAsURL, IFileUploadProps } from 'components';
import {
  Box,
  Text,
  Stack,
  Icon,
  HStack,
  chakra,
  Alert,
  AlertIcon,
  Flex,
} from '@chakra-ui/react';
import { GrDocumentPdf } from 'react-icons/gr';

import React, { useState, useEffect } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { PdfIcon } from 'components/Icons';

const fileTypes = ['pdf'];

export const PdfUploader = ({
  containerStyles,
  onChange,
  value,
}: IFileUploadProps) => {
  const [pdfBuffer, setPdfBuffer] = useState<string | null>(value);
  const [file, setFile] = useState<any>();
  const [error, setError] = useState<string>('');

  const handleChange = (data: any) => {
    if (data?.size > 5242880) {
      setError('File must not be greater than 5MB');
      setTimeout(() => setError(''), 3000);
    }
    encodeImageFileAsURL(data, setPdfBuffer);
    setFile(data);
    console.log(data);
  };
  const renderDropzone = () => {
    return (
      <>
        {!!error && (
          <Alert status="error">
            <AlertIcon />
            <Text fontSize="sm"> {error}</Text>
          </Alert>
        )}
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={4}
          bg="white"
          borderRadius="lg"
          h="250px"
          borderWidth={1}
          borderStyle="dashed"
          borderColor="black"
          {...containerStyles}
        >
          <PdfIcon />
          <Box textAlign="center">
            <Text fontSize="14px" textColor="brandGray.400">
              Drop your files here,{' '}
              <chakra.span color="#FF5403">or click to browse</chakra.span>
            </Text>
          </Box>
        </Stack>
      </>
    );
  };

  useEffect(() => {
    if (pdfBuffer) {
      onChange(pdfBuffer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdfBuffer]);

  function niceBytes(x: number) {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0,
      n = x || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
  }

  return (
    <Box>
      {pdfBuffer ? (
        <Flex borderRadius="lg" height="80px" alignItems="flex-start">
          <Flex
            mr="20px"
            h="70px"
            w="70px"
            bg="#E5E8F0"
            borderRadius="md"
            justifyContent="center"
            alignItems="center"
          >
            <Icon h="30px" as={GrDocumentPdf} />
          </Flex>
          <HStack justifyContent="space-between" pr="4">
            <Stack justifyContent="center">
              <Text>{file?.name}</Text>
              <Text fontSize="sm" color="#4D5760" fontWeight="light">
                {niceBytes(file.size)}
              </Text>
            </Stack>
          </HStack>
        </Flex>
      ) : (
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          children={renderDropzone()}
        />
      )}
    </Box>
  );
};
