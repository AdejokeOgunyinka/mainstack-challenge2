import React, { useEffect, useRef, useState } from 'react';
import { IMageBlockProps } from './SingleLayoutView';
import { Box, Image, Text, BoxProps, StackProps, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const MotionBox = motion<BoxProps>(Box);
export const MotionStack = motion<StackProps>(Stack);

export const CarouselLayoutView = ({ data }: IMageBlockProps) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(carouselRef.current){
      setWidth(carouselRef.current?.scrollWidth)
    }
  },[carouselRef])

  return (
    <MotionBox onClick={(event) => event.stopPropagation()} onMouseDown={(event) => event.stopPropagation()} ref={carouselRef} className="carousel" cursor="grab" overflow="hidden">
      <MotionStack drag="x" dragConstraints={{right: 0, left: -width}} spacing={2} direction="row" className="inner-carousel">
      {data.images.map((image) => (
        <MotionBox key={image.id} pos="relative" height="340px" minW="25rem" overflow="hidden" borderRadius="lg">
          <Image pointerEvents='none' alt={image.alt} boxSize="100%" objectFit="cover" src={image?.buffer} />
          <Box 
          pos='absolute'
          bottom="10px"
          left="20px"
          >
            <Text fontSize='md' textTransform="capitalize" color="white">{image.caption}</Text>
          </Box>
        </MotionBox>
      ))}
      </MotionStack>
    </MotionBox>
  );
};
