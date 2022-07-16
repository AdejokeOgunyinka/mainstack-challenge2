import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  Text,
  Stack,
} from '@chakra-ui/react';
import { FiMoreHorizontal } from 'react-icons/fi';
import NavIconButton from '../../components/NavIconButton';
import NavIcon from '../../assets/iconComponents/NavIcon';
import { Colors } from '../../constants';
import { Logo } from '../../components';
import {
  DashboardLayoutProps,
  MobileProps,
  NavItemProps,
  SidebarProps,
} from './types';
import { LinkItems } from './menu';
import { NavLink as RouterLink } from 'react-router-dom';
import Preview from '../../compositions/PreviewSection';

const DashboardLayout = ({ content, editor }: DashboardLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={'flex'} h="100vh" width={'100%'} maxW={'1440px'} mx="auto">
      <SidebarContent
        width={{ base: 'full', lg: '226px', xl: '304px' }}
        maxW={'304px'}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent mobile onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Flex
        flex={1}
        ml={{ base: 0, md: 60, xl: 80 }}
        mb={10}
        p="4"
        pb="8"
        w={'full'}
        h={'full'}
        pos={'relative'}
        maxW={{
          lg: editor ? '480px' : '1136px',
          xl: editor ? '690px' : '1136px',
        }}
        overflow={editor ? 'hidden' : 'auto'}
      >
        {content}
      </Flex>
      {editor && (
        <Stack display={{ base: 'none', lg: 'flex' }}>
          <Preview />
        </Stack>
      )}
      <MobileNav
        display={{ base: 'flex', md: 'none' }}
        width={'100%'}
        position={'fixed'}
        bottom={0}
        onOpen={onOpen}
        zIndex={'tooltip'}
      />
    </Box>
  );
};

const SidebarContent = ({ mobile, onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx={{ base: '8', md: '12' }}
        justifyContent="space-between"
      >
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.slice(0, 1).map((link) => (
        <NavItem
          key={link.name}
          active={link.active}
          label={link.name}
          route={link.route}
        />
      ))}
      {!mobile &&
        LinkItems.slice(1, 4).map((link) => (
          <NavItem
            key={link.name}
            active={link.active}
            label={link.name}
            route={link.route}
          />
        ))}
      <Text
        fontSize={'12px'}
        fontWeight={'semibold'}
        letterSpacing={'0.5px'}
        textTransform={'uppercase'}
        mx={'12'}
        mt={'8'}
        mb={'5'}
      >
        Payments
      </Text>
      {!mobile &&
        LinkItems.slice(4, 5).map((link) => (
          <NavItem
            key={link.name}
            active={link.active}
            label={link.name}
            route={link.route}
          />
        ))}
      {LinkItems.slice(5, 6).map((link) => (
        <NavItem
          key={link.name}
          active={link.active}
          label={link.name}
          route={link.route}
        />
      ))}
      <Text
        fontSize={'12px'}
        fontWeight={'semibold'}
        letterSpacing={'0.5px'}
        textTransform={'uppercase'}
        mx={'12'}
        mt={'8'}
        mb={'5'}
      >
        Business Tools
      </Text>
      {LinkItems.slice(6, 9).map((link) => (
        <NavItem
          key={link.name}
          active={link.active}
          label={link.name}
          route={link.route}
        />
      ))}
      {mobile && (
        <Text
          fontSize={'12px'}
          fontWeight={'semibold'}
          letterSpacing={'0.5px'}
          textTransform={'uppercase'}
          mx={'12'}
          mt={'8'}
          mb={'5'}
        >
          Others
        </Text>
      )}
      {mobile &&
        LinkItems.slice(9).map((link) => (
          <NavItem
            key={link.name}
            active={link.active}
            label={link.name}
            route={link.route}
          />
        ))}
    </Box>
  );
};

const NavItem = ({ active, label, route, ...rest }: NavItemProps) => {
  const borderColor = active ? Colors.orange : 'white';
  const activeColor = active ? Colors.orange : Colors.primaryBlack;
  return (
    <Link
      as={RouterLink}
      to={route}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      _activeLink={{ color: activeColor }}
    >
      <Flex
        align="center"
        px="10"
        my="4"
        role="group"
        cursor="pointer"
        borderLeftColor={borderColor}
        borderLeftWidth={2}
        _hover={{
          borderLeftColor: Colors.orange,
          borderLeftWidth: 2,
        }}
        {...rest}
      >
        <NavIconButton
          active={active}
          icon={<NavIcon navName={label} />}
          iconLabel={label}
        />
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderTopWidth="1px"
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="space-between"
      {...rest}
    >
      {LinkItems.slice(1, 5).map((link) => (
        <NavIconButton
          active={link.active}
          key={link.name}
          flexDir={'column'}
          open={onOpen}
          icon={<NavIcon navName={link.name} />}
          iconLabel={link.name}
        />
      ))}
      <NavIconButton
        active
        flexDir={'column'}
        open={onOpen}
        icon={<FiMoreHorizontal />}
        iconLabel={'More'}
      />
    </Flex>
  );
};

export default DashboardLayout;
