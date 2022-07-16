import { Flex, Box, Image, Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import DrawerModal from 'components/Modal';
import { socialLinks } from '../constants';
import EmailInvite from './EmailInvite';

const ShareTribe = () => {
  const [activeContent, setActiveContent] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (link: any) => {
    if (link.type === 'drawer') {
      setActiveContent(link.id);
      onOpen();
    } else {
      console.log('hello');
    }
  };

  const active: any = {
    5: {
      content: <EmailInvite onChangeContent={() => console.log('Hi')} />,
      title: 'Share via Email',
    },
  };
  return (
    <>
      <DrawerModal
        isOpen={isOpen}
        onClose={onClose}
        headingText={active[activeContent]?.title}
        size="md"
      >
        {active[activeContent]?.content}
      </DrawerModal>
      <Flex flexDirection="column" alignItems="center" w="full">
        {socialLinks.map((link) => (
          <Box key={link.id} w="full">
            <Flex
              as="button"
              w="full"
              h="48px"
              px={'24px'}
              py={'16px'}
              bg={'transparent'}
              border={'1px solid #E5E8F0'}
              color={'primaryBlack'}
              borderRadius="100px"
              mb={'12px'}
              alignItems="center"
              justifyContent="center"
              position="relative"
              onClick={() => handleClick(link)}
            >
              <Image
                position="absolute"
                left={'24px'}
                src={link.socialIcon}
                alt="social"
              />
              <Text textColor="#131316" fontSize="15px" textAlign="center">
                {link.text}
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default ShareTribe;
