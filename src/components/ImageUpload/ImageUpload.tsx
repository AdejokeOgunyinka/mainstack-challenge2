import {
  Input,
  Box,
  Text,
  Image,
  Stack,
  Heading,
  StackProps,
  IconButton,
  Icon,
  HStack,
} from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { cameraBlackIcon } from 'assets/svgs';
import { DeleteIcon } from 'components/Icons';
import { AiOutlineCamera } from 'react-icons/ai';

const fileTypes = ['JPEG', 'PNG'];

export interface IFileUploadProps {
  containerStyles?: StackProps;
  onChange: (imgUrl: string) => void;
  value: string;
}

export function encodeImageFileAsURL(image: any, cb: (base64: string) => void) {
  var reader = new FileReader();
  reader.onloadend = function () {
    cb(reader.result as string);
  };
  reader.readAsDataURL(image);
}

export const ImageUpload = ({
  containerStyles,
  onChange,
  value,
}: IFileUploadProps) => {
  const [imgBase64, setImgBase64] = useState<string | null>(value);

  const handleChange = (file: any) => {
    encodeImageFileAsURL(file, setImgBase64);
  };

  const renderDropzone = () => {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={4}
        bg="gray.100"
        borderRadius="lg"
        h="250px"
        {...containerStyles}
      >
        <Image h="30px" src={cameraBlackIcon} />
        <Box textAlign="center">
          <Heading size="sm">Upload your image</Heading>
          <Text fontSize="14px" textColor="brandGray.400">
            Minimum width 480 pixels, 16:9 recommended
          </Text>
        </Box>
      </Stack>
    );
  };

  const handleDeleteImage = () => {
    setImgBase64('');
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files[0]) {
      let img = files[0];
      encodeImageFileAsURL(img, setImgBase64);
    }
  };

  const renderImage = () => {
    return imgBase64 ? (
      <>
        <Input
          type="file"
          display="none"
          height="0"
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={4}
          bg="gray.100"
          borderRadius="lg"
          h="250px"
          position="relative"
          overflow="hidden"
          {...containerStyles}
        >
          <Image boxSize="100%" objectFit="cover" src={imgBase64 as string} />
          <HStack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
          >
            <IconButton
              bg="rgba(0,0,0,0.5)"
              aria-label="camera"
              h="40px"
              w="40px"
              borderRadius="full"
              icon={<Icon color="white" as={AiOutlineCamera} />}
              onClick={() => fileInputRef && fileInputRef.current?.click()}
            />
            <IconButton
              bg="rgba(0,0,0,0.5)"
              aria-label="delete"
              h="40px"
              w="40px"
              borderRadius="full"
              onClick={handleDeleteImage}
              icon={<DeleteIcon color="white" />}
            />
          </HStack>
        </Stack>
      </>
    ) : null;
  };

  useEffect(() => {
    if (imgBase64) {
      onChange(imgBase64);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgBase64]);

  return (
    <Box>
      {imgBase64 ? (
        renderImage()
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
