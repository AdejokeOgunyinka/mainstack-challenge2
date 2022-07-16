import { Heading, HStack, Show, VStack, Text, Box } from '@chakra-ui/react';
import { Logo } from '../../components';
import { IAuthLayout } from './types';

const AuthLayout: React.FC<IAuthLayout> = ({
  banner,
  content,
  description,
  title,
}) => {
  return (
    <HStack
      alignItems={{ base: 'flex-start', lg: 'center' }}
      justifyContent={'center'}
      p={3}
      width={'100%'}
      maxW={'1440px'}
      mx="auto"
    >
      {banner && (
        <Show above="lg">
          <VStack
            width={{ base: '36%', lg: '524px' }}
            maxW={'524px'}
            h={'95vh'}
            maxH={'852px'}
          >
            {banner}
          </VStack>
        </Show>
      )}
      <VStack
        align={'flex-start'}
        alignItems={'center'}
        flex={{ lg: 1 }}
        h={!banner ? 'full' : ''}
      >
        <Box w={'100%'} alignContent={'left'} maxW={'504px'}>
          {banner && <Logo h="6vmin" my={'3'} pointerEvents="none" />}
          {title && <Heading mb={"12px"} textAlign={'left'}>{title}</Heading>}
          {description && (
            <Text fontSize="sm" textAlign={'left'}>
              {description}
            </Text>
          )}
        </Box>
        <Box
          width={'100%'}
          maxWidth={banner ? '504px' : 'full'}
          h={!banner ? 'full' : ''}
          pos={'relative'}
        >
          {content}
        </Box>
      </VStack>
    </HStack>
  );
};

export default AuthLayout;
