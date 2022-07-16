import { Flex, IconButton, Text } from '@chakra-ui/react';
import { Colors } from '../../constants';
import { INavIconButton } from './types';

const NavIconButton: React.FC<INavIconButton> = ({
  active,
  flexDir,
  open,
  icon,
  iconLabel,
}) => {
  const activeColor = active ? Colors.orange : Colors.primaryBlack;
  return (
    <Flex flexDir={flexDir} onClick={open}>
      <IconButton
        height={5}
        mb={0.5}
        pr={'14px'}
        variant={'ghost'}
        aria-label="open menu"
        icon={icon}
        color={activeColor}
        _hover={{
          bg: 'none',
        }}
      />
      <Text
        fontSize={'12px'}
        lineHeight={'22px'}
        textAlign={'center'}
        color={activeColor}
      >
        {iconLabel}
      </Text>
    </Flex>
  );
};

export default NavIconButton;
