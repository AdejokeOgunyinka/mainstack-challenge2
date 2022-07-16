import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IImageBlock } from 'store/slices/types';

export interface IMageBlockProps {
  data: IImageBlock;
}

export const SingleLayoutView = ({ data }: IMageBlockProps) => {
  return (
    <Stack>
      {data.images.map((image) => (
        <Box pos="relative" height="340px" overflow="hidden" borderRadius="lg">
          <Image alt={image.alt} boxSize="100%" objectFit="cover" src={image?.buffer} />
          <Box 
          pos='absolute'
          bottom="10px"
          left="20px"
          >
            <Text fontSize='md' textTransform="capitalize" color="white">{image.caption}</Text>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};
