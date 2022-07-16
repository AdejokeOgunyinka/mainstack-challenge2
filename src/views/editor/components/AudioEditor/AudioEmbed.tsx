import { AspectRatio } from '@chakra-ui/react';
import React from 'react';
import { ILink, MediaPlatform } from 'store/slices/types';
import ReactPlayer from 'react-player';

interface IAudioEmbedProps {
  links: ILink[];
  platform: MediaPlatform;
}

const getEmbedUrl = (url: string, platform: MediaPlatform): string => {
  const delimeter: Record<string, string> = {
    [MediaPlatform.Spotify]: '.com',
    [MediaPlatform.AppleMusic]: '//',
    [MediaPlatform.Tidal]: '//',
  };

  const arr = url.split(delimeter[platform]);

  switch (platform) {
    case MediaPlatform.Spotify:
      return `${arr[0]}.com/embed${arr[1]}`;
    case MediaPlatform.AppleMusic:
    case MediaPlatform.Tidal:
      return `${arr[0]}//embed.${arr[1]}`;

    default:
      return `${arr[0]}.com/embed${arr[1]}`;
  }
};

export const AudioEmbed = ({ links, platform }: IAudioEmbedProps) => {
    const renderOtherAudio = (link: ILink) => (
      <iframe
        title="audio"
        allow="autoplay; encrypted-media *;"
        frameBorder="0"
        seamless={true}
        src={getEmbedUrl(link.link, platform)}
        allowFullScreen
      />
    );

  const renderAudioPlayer = (link: ILink) => {
    switch (platform) {
      case MediaPlatform.Soundcloud:
      case MediaPlatform.YouTubeMusic:
        return <ReactPlayer key={link.id} url={link?.link} />;
      case MediaPlatform.Spotify:
      case MediaPlatform.AppleMusic:
      case MediaPlatform.Tidal:
        return renderOtherAudio(link);
      default:
        return <ReactPlayer key={link.id} url={link?.link} />;
    }
  };
  return (
    <>
      {links.map((link) => (
        <AspectRatio
          key={link?.link}
          w="100%"
          ratio={3 / 2}
          borderRadius="lg"
          overflow="hidden"
        >
          {renderAudioPlayer(link)}
        </AspectRatio>
      ))}
    </>
  );
};
