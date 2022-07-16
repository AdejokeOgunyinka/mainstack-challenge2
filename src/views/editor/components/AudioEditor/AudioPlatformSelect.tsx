import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid
} from '@chakra-ui/react';
import { soundcloudIcon, spotifyIcon, appleMusicIcon, tidalIcon, youtubeIcon } from 'assets/svgs';
import { MediaPlatform } from 'store/slices/types';


const platforms = [
  {
    label: 'Spotify',
    icon: <Image src={spotifyIcon} />,
    value: MediaPlatform.Spotify,
  },
  {
    label: 'Soundcloud',
    icon: <Image src={soundcloudIcon} />,
    value: MediaPlatform.Soundcloud,
  },
  {
    label: 'Apple Music',
    icon: <Image src={appleMusicIcon} />,
    value: MediaPlatform.AppleMusic,
  },
  {
    label: 'Tidal',
    icon: <Image src={tidalIcon} />,
    value: MediaPlatform.Tidal,
  },
  {
    label: 'YouTube Music',
    icon: <Image src={youtubeIcon} />,
    value: MediaPlatform.YouTubeMusic,
  },
];

interface IAudioPlatformSelectProps {
  onChange: (layout: MediaPlatform) => void;
  value: MediaPlatform;
}

export const AudioPlatformSelect = ({
  onChange,
  value,
}: IAudioPlatformSelectProps) => {
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
      <SimpleGrid columns={[2,2,3]} spacing={8}>
        {platforms.map(({ label, icon, value }) => {
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
              minWidth="100px"
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
