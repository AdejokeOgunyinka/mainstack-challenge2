import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { Colors } from '../../constants';

const Preview = () => {
  return (
    <Flex w={'full'} h={'full'} pos={'relative'}>
      <VStack
        w={'full'}
        flexDir={'column'}
        bg={Colors.primaryBlack}
        borderRadius={'24px'}
        overflow={'scroll'}
        p={3.5}
        css={{
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box></Box>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
        <Text>This is the text box, This is the text box, This is th</Text>
      </VStack>
    </Flex>
  );
};

export default Preview;
