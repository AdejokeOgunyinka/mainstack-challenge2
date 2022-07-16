import React, { ReactComponentElement } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Box,
  Heading,
} from '@chakra-ui/react';

type ModalProps = {
  headingText?: string | ReactComponentElement<any>;
  contentFooter?: ReactComponentElement<any>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  headerAction?: React.ReactNode;
};
const DrawerModal: React.FC<ModalProps & DrawerProps> = ({
  headingText,
  contentFooter,
  isOpen,
  placement,
  onClose,
  children,
  size,
  headerAction,
}) => {
  return (
    <Box
      css={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={placement || 'right'}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent padding={'25px'}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            {headerAction ? (
              headerAction
            ) : (
              <Heading fontSize={'20px'}>{headingText}</Heading>
            )}

            <DrawerCloseButton
              pos={'relative'}
              top={'unset'}
              right={'unset'}
              _hover={{ background: 'none', border: 'none' }}
              border={'none'}
            />
          </Flex>

          <DrawerBody px={0} className="no-scrollbar">{children}</DrawerBody>
          <DrawerFooter>{contentFooter}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerModal;
