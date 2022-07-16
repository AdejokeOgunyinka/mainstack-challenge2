import React, { FC, useState } from 'react';
import KnowYouForm from '../../../../compositions/Forms/KnowYou';
import { AuthLayout } from '../../../../layouts';
import { Box } from '@chakra-ui/react';
import Header from '../../../../components/Header';
import { IHeader } from '../../../../components/Header/types';
import IntroMessage from '../../../../components/IntroMessage';
import SocialMediaLinks from '../../../../components/SocialMediaLinks';

export interface KnowYouT {
  setSlide?: (index: number) => void;
  slide?: number;
  onUpdate?: (pos: number) => void;
  skip?: string;
}

const form = [KnowYouForm, IntroMessage, SocialMediaLinks];
const KnowYou: React.FC<IHeader & KnowYouT> = () => {
  const [slide, setSlide] = useState(0);
  const Components: FC<any> = form[slide];

  const handleClick = (pos: number) => {
    setSlide(slide + pos);
  };

  return (
    <AuthLayout
      content={
        <Box pos={'relative'}>
          <Header slide={slide} ellipsis />
          <Box
            margin={{ base: '', md: 'auto' }}
            maxWidth={{ base: '335px', md: '504px' }}
          >
            <Components skip onUpdate={handleClick} />
          </Box>
        </Box>
      }
    />
  );
};

export default KnowYou;
