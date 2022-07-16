import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { IMediaBlockData } from 'store/slices/types';
import { AudioEmbed } from './AudioEmbed';

interface IEditorAudioViewProps {
  data: IMediaBlockData;
}

export const EditorAudioView = ({ data }: IEditorAudioViewProps) => {
  return (
    <Stack spacing={4}>
      <Heading size="sm">{data?.value?.header}</Heading>
      <AudioEmbed platform={data.value.platform} links={data.value.links} />
    </Stack>
  );
};
