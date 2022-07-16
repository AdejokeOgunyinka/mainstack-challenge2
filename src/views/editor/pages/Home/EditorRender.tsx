import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import DrawerModal from 'components/Modal';
import { useAppSelector } from 'hooks';
import { EditorHeaderAction } from 'views/editor/components/EditorHeaderAction';
import { EditorItemsViewer } from 'views/editor/components/EditorItemsContainer';
import { Colors } from '../../../../constants';
import { AboutUser, EditorContainer, FloatingGUI } from '../../components';

const EditorRender = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    user: { userDetails },
    editor: { currentEditorBlockElement },
  } = useAppSelector((state) => state);

  const onClickCustomize = () => {
    console.log('customize');
  };
  const onClickAddElement = () => {
    console.log('add element');
    // open modal
    onOpen();
  };

  return (
    <>
      <Flex
        flexDir={'column'}
        w={'full'}
        maxW={{ base: 'full', lg: '450px', xl: '657px' }}
        mt={{ base: 0, lg: '-4' }}
        // mb={{ base: 0, lg: -20 }}
        pt={{ base: 0, lg: 4 }}
        pr={{ base: 0, lg: '24px' }}
        borderRight={{ lg: '1px solid' }}
        borderRightColor={{ lg: Colors.gray200 }}
        pos={'relative'}
        overflow={'scroll'}
        css={{
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex
          justifyContent={'space-between'}
          align={'center'}
          w={{ base: 'full' }}
          maxW={{ lg: '450px', xl: '657px' }}
          pos={{ lg: 'fixed' }}
          zIndex="banner"
          ml={{ lg: -4 }}
          // bg={'rgba(255, 255, 255, 0.8)'}
          p={{ base: 0, lg: 2 }}
          borderRadius={10}
          backdropFilter={'blur(32px)'}
        >
          <Box display={'flex'} alignItems={'center'}>
            <Image
              borderRadius="full"
              boxSize="32px"
              src="https://bit.ly/code-beast"
              alt="Dan Abramov"
            />
            <Flex flexDir={'column'} ml={'10px'}>
              <Text fontSize={'18px'} lineHeight={'24px'}>
                {userDetails?.username}
              </Text>
              <Text
                fontSize={'12px'}
                lineHeight={'18px'}
                color={Colors.gray400}
              >
                {userDetails?.url}
              </Text>
            </Flex>
          </Box>
          <Button px={'20px'} variant="primary" borderRadius={'100px'}>
            Publish
          </Button>
        </Flex>
        <FloatingGUI
          onClickAddElement={onClickAddElement}
          onClickCustomize={onClickCustomize}
        />
        <AboutUser />
        <Stack my={{ base: 0, lg: 12 }} py={4} mb={{ base: 16, lg: 12 }}>
          <Flex flexDir={'column'}>
            <EditorItemsViewer />
          </Flex>
        </Stack>
      </Flex>
      
      <DrawerModal
        headingText="Select block element"
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        {...(currentEditorBlockElement && {
          headerAction: <EditorHeaderAction />,
        })}
      >
        <EditorContainer onClose={onClose} />
      </DrawerModal>
    </>
  );
};

export default EditorRender;
