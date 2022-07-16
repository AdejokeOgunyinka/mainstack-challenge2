import React from 'react';
import { Box, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { Button as ChakraBtn } from '@chakra-ui/react';
import { ReactComponent as Camera } from '../../assets/svgs/camera.svg';
import { IHeader } from '../Header/types';
import { KnowYouT } from '../../views/onboarding/pages/KnowYou';

const IntroMessage: React.FC<IHeader & KnowYouT> = ({ onUpdate }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onUpdate) {
      onUpdate(1);
    }
  };

  return (
    <Box>
      <Heading marginBottom={'8px'} fontSize={{ base: '24px', md: '48px' }}>
        Hello{' '}
        <Text color={'#91989E'} as={'span'} fontSize={''}>
          Blessing 🤗
        </Text>
      </Heading>
      <Text fontSize={'14px'} lineHeight={''}>
        Feels so good to have you on mainstack, now let's put a face to the
        name. Kindly....
      </Text>
      <form onSubmit={handleSubmit}>
        <Box
          maxW={{ base: '296px', md: '344px' }}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Stack
            position={'relative'}
            borderRadius={'50%'}
            width={{ base: '72px', md: '120px' }}
            height={{ base: '72px', md: '120px' }}
            background={'#E5E8F0'}
            my={5}
          >
            <Camera
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Input
              type="file"
              opacity="0"
              aria-hidden="true"
              accept="image/*"
              borderRadius={'50%'}
              background={'#E5E8F0'}
            />
          </Stack>
          <ChakraBtn
            padding={'12px 24px'}
            borderRadius={'100px'}
            border={'1px solid #E5E8F0'}
            background={'#ffffff'}
          >
            <Text fontWeight={'lighter'} fontSize={'15px'}>
              Upload Profile Picture
            </Text>
          </ChakraBtn>
        </Box>
        <HStack justifyContent={'space-between'}>
          <ChakraBtn
            variant={'outline'}
            colorScheme="gray"
            fontSize={'14px'}
            minW={{ base: '162px', md: '246px' }}
            h={{ base: '40px', md: '48px' }}
            w={'full'}
            maxW={'244px'}
            borderRadius={'3xl'}
            background={'#E5E8F0'}
            color={'#91989E'}
            onClick={() => onUpdate && onUpdate(-1)}
          >
            <Text fontWeight={'lighter'} fontSize={'15px'}>
              Back
            </Text>
          </ChakraBtn>
          <ChakraBtn
            variant={'outline'}
            colorScheme="gray"
            fontSize={'15px'}
            minW={{ base: '162px', md: '246px' }}
            h={{ base: '40px', md: '48px' }}
            w={'full'}
            maxW={'244px'}
            borderRadius={'3xl'}
            background={'#91989E'}
            color={'#ffffff'}
            type={'submit'}
          >
            <Text fontWeight={'lighter'} fontSize={'15px'}>
              Continue
            </Text>
          </ChakraBtn>
        </HStack>
      </form>
    </Box>
  );
};

export default IntroMessage;
