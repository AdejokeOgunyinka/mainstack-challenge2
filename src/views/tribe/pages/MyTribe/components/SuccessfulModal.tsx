import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
import CHECK_CIRCLE from 'assets/svgs/digital/icons/check_circle.svg';

const SuccessfulModal = () => {
  return (
    <Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="44px"
        h="44px"
        p="10px"
        bg="#05996433"
        borderRadius="50%"
        mr={3}
      >
        <Image src={CHECK_CIRCLE} alt="success icon" />
      </Flex>
      <Box>
        <Heading fontSize={'18px'} mb="8px" textColor="primaryBlack">
          Successful
        </Heading>
        <Text fontSize={'14px'} fontWeight="normal" textColor="gray400">
          Invite sent successfully
        </Text>
      </Box>
    </Flex>
  );
};
export default SuccessfulModal;
