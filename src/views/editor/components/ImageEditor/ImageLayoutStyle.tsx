import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { PhotoIcon, CarouselIcon, GridIcon } from 'components/Icons';
import React, { useEffect, useState } from 'react';

export enum ImageLayoutEnum {
  Single = 'single',
  Grid = 'grid',
  Carousel = 'carousel',
}

const getLayouts = (layoutType?: ImageLayoutEnum) => [
  {
    label: 'Single Layout',
    icon: (
      <PhotoIcon
        {...(layoutType === ImageLayoutEnum.Single && { color: '#AA3802' })}
      />
    ),
    value: ImageLayoutEnum.Single,
  },
  {
    label: 'Grid Layout',
    icon: (
      <GridIcon
        {...(layoutType === ImageLayoutEnum.Grid && { color: '#AA3802' })}
      />
    ),
    value: ImageLayoutEnum.Grid,
  },
  {
    label: 'Carousel Layout',
    icon: (
      <CarouselIcon
        {...(layoutType === ImageLayoutEnum.Carousel && { color: '#AA3802' })}
      />
    ),
    value: ImageLayoutEnum.Carousel,
  },
];

interface IImageLayoutStyleProps {
  onChange: (layout:ImageLayoutEnum ) => void;
  value: ImageLayoutEnum
}

export const ImageLayoutStyle = ({onChange, value}: IImageLayoutStyleProps) => {
  const [selectedLayout, setSelectedLayout] = useState<
    ImageLayoutEnum | undefined
  >(value);

  const handleSelectLayout = (layout: ImageLayoutEnum) => {
    setSelectedLayout(layout);
  };

  useEffect(() => {
    selectedLayout && onChange(selectedLayout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedLayout])

  return (
    <Box>
      <Heading mb={4} size="sm">
        Select layout style
      </Heading>
      <SimpleGrid columns={[2,2,3]} spacing={4}>
        {getLayouts(selectedLayout).map(({ label, icon, value }) => {
          const isActive = selectedLayout === value;
          return (
            <Stack
              spacing={2}
              key={value}
              borderWidth={1}
              borderColor={isActive ? '#FF8D57' : ''}
              p="4"
              borderRadius="md"
              cursor="pointer"
              color={isActive ? '#AA3802' : 'primaryBlack'}
              alignItems="center"
              onClick={() => handleSelectLayout(value)}
              bg={isActive ? '#FFEEE7' : 'transparent'}
              _hover={{
                borderColor: '#FF8D57',
              }}
            >
              {icon}
              <Text fontSize="sm">{label}</Text>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
