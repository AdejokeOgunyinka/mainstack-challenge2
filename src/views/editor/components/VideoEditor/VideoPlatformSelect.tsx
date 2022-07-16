import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid
} from '@chakra-ui/react';
import { youtubeIcon, vimeoIcon, twitchIcon } from 'assets/svgs';
import React, { useEffect, useState } from 'react';
import { MediaPlatform } from 'store/slices/types';

const videoPlatforms = [
  {
    label: 'Youtube',
    icon: <Image src={youtubeIcon} />,
    value: MediaPlatform.Youtube,
  },
  {
    label: 'Vimeo',
    icon: <Image src={vimeoIcon} />,
    value: MediaPlatform.Vimeo,
  },
  {
    label: 'Twitch',
    icon: <Image src={twitchIcon} />,
    value: MediaPlatform.Twitch,
  },
];

interface IVideoLayoutStyleProps {
  onChange: (layout: MediaPlatform) => void;
  value: MediaPlatform;
}

export const VideoPlatformSelect = ({
  onChange,
  value,
}: IVideoLayoutStyleProps) => {
  const [selectedLayout, setSelectedLayout] = useState<
    MediaPlatform | undefined
  >(value);

  const handleSelectLayout = (layout: MediaPlatform) => {
    setSelectedLayout(layout);
  };

  useEffect(() => {
    selectedLayout && onChange(selectedLayout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLayout]);

  return (
    <Box>
      <Heading mb={4} size="sm">
        Select video platform
      </Heading>
      <SimpleGrid columns={[2,2,3]} spacing={4}>
        {videoPlatforms.map(({ label, icon, value }) => {
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
