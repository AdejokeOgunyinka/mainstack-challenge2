import { Flex, Box, Image, Text, useDisclosure } from '@chakra-ui/react';
import { socialLinks } from '../../constants';
import DrawerModal from 'components/Modal';
import ShareWithTribe from './ShareWithTribe';
import { useState } from 'react';
import ShareWithCustomers from './ShareWithCustomers';
import ShareViaEmail from './ShareViaEmail';

export interface IShareClassProps {
  classData?: any;
  onChangeContent?: any;
}

const ShareClass: React.FC<IShareClassProps> = ({ classData }) => {
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
    2: {
      content: <ShareWithTribe />,
      title: 'Share with your Tribe',
    },
    3: {
      content: <ShareWithCustomers />,
      title: 'Share with your Customers',
    },
    9: {
      content: <ShareViaEmail />,
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
      <Flex
        flexDirection="column"
        w="full"
        css={{
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex alignItems="center" mb="32px" mt="24px">
          {classData ? (
            <Image
              mr={4}
              borderRadius="6px"
              boxSize="56px"
              objectFit="cover"
              src={classData.image}
              alt="book"
            />
          ) : null}
          <Text
            textColor="primaryBlack"
            fontSize="md"
            width={{ base: '220px', md: '320px' }}
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            Check out my new Masterclass
          </Text>
        </Flex>
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

export default ShareClass;
