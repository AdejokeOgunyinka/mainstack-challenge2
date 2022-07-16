import React from 'react';
import { Stack, Box, Skeleton } from '@chakra-ui/react';
import { LinkEditorData } from 'store/slices/types';
import { TwitterTweetEmbed } from 'react-twitter-embed';

interface IEditoRLinkViewProps {
  data: LinkEditorData;
}

export const EditorTweetView = ({ data }: IEditoRLinkViewProps) => {
  return (
    <Stack spacing={4} justifyContent="center" w="full">
      {data.value.map((link) => (
        <Box w="full" margin="0 auto">
          <TwitterTweetEmbed placeholder={<Skeleton h="200px" w="95%" borderRadius="md"/> } tweetId={link.link.split('/')[5]} />
        </Box>
      ))}
    </Stack>
  );
};
