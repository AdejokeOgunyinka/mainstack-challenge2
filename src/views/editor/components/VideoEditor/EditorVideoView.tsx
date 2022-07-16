import React from 'react';
import { AspectRatio, Heading, Stack } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { IMediaBlockData } from 'store/slices/types';

interface IEditorVideoViewProps {
  data: IMediaBlockData;
}

export const EditorVideoView = ({ data }: IEditorVideoViewProps) => {
  return (
    <Stack spacing={4}>
      <Heading size="sm">{data?.value?.header}</Heading>
      {data.value.links.map((link) => (
        <AspectRatio
          key={link?.link}
          w="100%"
          ratio={3 / 2}
          borderRadius="lg"
          overflow="hidden"
        >
          <ReactPlayer key={link.id} url={link?.link} />
        </AspectRatio>
      ))}
    </Stack>
  );
};
