import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Masonry from 'react-masonry-css';
import { IMageBlockProps } from './SingleLayoutView';

export const GridLayoutView = ({ data }: IMageBlockProps) => {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.images.map((image) => (
        <Box pos="relative" height="300px" overflow="hidden" borderRadius="lg">
          <Image boxSize="100%" objectFit="cover" src={image?.buffer} alt={image.alt}/>
          <Box pos="absolute" bottom="10px" left="20px">
            <Text fontSize="md" textTransform="capitalize" color="white">
              {image.caption}
            </Text>
          </Box>
        </Box>
      ))}
    </Masonry>
  );
};
