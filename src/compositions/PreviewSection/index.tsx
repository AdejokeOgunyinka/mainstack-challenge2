import { Flex, Stack, Button } from '@chakra-ui/react';
import Preview from '../Preview';

const PreviewSection = () => {
  return (
    <Flex
      flexDir={'column'}
      p={{ lg: 0, xl: 4 }}
      w={'full'}
      minW={{ lg: '300px', xl: '380px' }}
      maxW={{ lg: '300px', xl: '380px' }}
      h={'full'}
      pos={'relative'}
    >
      <Stack w={'full'} h={'calc(100vh - 150px)'} mt={4}>
        <Preview />
      </Stack>
      <Flex
        pos={'fixed'}
        bottom={10}
        w={'full'}
        maxW={{ lg: '300px', xl: '350px' }}
        minH={'48px'}
      >
        <Button
          fontSize="md"
          fontWeight="thin"
          variant="outline"
          p="2"
          w="full"
          borderRadius="full"
        >
          Share Page Link
        </Button>
      </Flex>
    </Flex>
  );
};

export default PreviewSection;
