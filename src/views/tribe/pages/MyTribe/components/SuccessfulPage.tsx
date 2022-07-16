import { Box, Flex, Image, Text, Heading, Spacer } from '@chakra-ui/react';
import CHECK_CIRCLE from 'assets/svgs/digital/icons/check_circle.svg';
import Button from 'components/Button';
import { CurrentContentEnum } from '../MyTribeRender';

interface SuccessInterface {
  CloseModal?(): void;
  onChangeContent: (content: CurrentContentEnum) => void;
}

const SuccessfulPage = ({ CloseModal, onChangeContent }: SuccessInterface) => {
  return (
    <>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        w={'full'}
        h={'full'}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="full"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            w="82px"
            h="82px"
            bg="#05996433"
            mb={6}
            borderRadius="50%"
          >
            <Image src={CHECK_CIRCLE} alt="success icon" />
          </Flex>
          <Heading
            fontSize={'18px'}
            textAlign="center"
            mb="8px"
            textColor="primaryBlack"
          >
            Tribe created successfully
          </Heading>
          <Text
            fontSize={'14px'}
            textAlign="center"
            mb="22px"
            textColor="gray400"
          >
            You can now invite members to join your tribe.
          </Text>
          <Box mb={8}>
            <Button
              text={'Invite via Email'}
              handleClick={() =>
                onChangeContent(CurrentContentEnum.EmailInvite)
              }
              px={'1.5rem'}
              py={'16px'}
              bg={'transparent'}
              border={'1px solid #E5E8F0'}
              color={'primaryBlack'}
              width={{ base: 'full', md: '374px' }}
              borderRadius="100px"
            />
          </Box>
          <Text fontSize="12px" textAlign="center">
            mainstack.me/blessingdaniels/tribe
          </Text>
        </Flex>
        <Box position="absolute" bottom={'20px'} w="100%">
          <Button
            text={'Close'}
            px={'1.5rem'}
            py={{ base: '12px', md: '16px' }}
            bg={'#E5E8F0'}
            color={'primaryBlack'}
            width={'full'}
            borderRadius="100px"
            handleClick={CloseModal}
          />
        </Box>
        <Spacer h={{ base: '84px', md: '0' }} />
      </Flex>
    </>
  );
};

export default SuccessfulPage;
