import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Center,
  Input,
  Spacer,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import IconButton from '../../../../components/IconButton';
import { Colors } from '../../../../constants';
import Button from '../../../../components/Button';
import EMPTY from '../../../../assets/svgs/tribe/empty-tribe.svg';
import CHAT from '../../../../assets/svgs/tribe/chat_bubble.svg';
import {
  yourTribeNail,
  tribesJoinedNail,
  discoverTribesNail,
} from '../../constants';
import DrawerModal from '../../../../components/Modal';
import TribeCard from './TribeCard';
import CreateTribe from './components/CreateTribe';
import SuccessfulPage from './components/SuccessfulPage';
import EmailInvite from './components/EmailInvite';
import ShareTribe from './components/ShareTribe';
import ShopFilter from 'views/digitalShop/pages/components/ShopFilter';
import { popOverLinks } from './constants';
import PopOver from 'components/PopOver';

export enum CurrentContentEnum {
  CreateTribe = 1,
  SuccessfulPage = 2,
  ShareTribe = 3,
  EmailInvite = 4,
}

const MyTribeRender = () => {
  const [isLargerthan500px] = useMediaQuery('(min-width: 500px)');
  const profileLink = 'mainstack.me/blessingdaniells/tribe';
  const [page, setPage] = useState('yourTribe');
  const [hasContent] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = useState(
    CurrentContentEnum.CreateTribe
  );

  const active: any = {
    [CurrentContentEnum.CreateTribe]: {
      content: <CreateTribe onChangeContent={setActiveContent} />,
      title: 'Create a Tribe',
    },
    [CurrentContentEnum.SuccessfulPage]: {
      content: (
        <SuccessfulPage
          onChangeContent={setActiveContent}
          CloseModal={onClose}
        />
      ),
      title: '',
    },
    [CurrentContentEnum.EmailInvite]: {
      content: <EmailInvite onChangeContent={setActiveContent} />,
      title: 'Invite via Email',
    },
    [CurrentContentEnum.ShareTribe]: {
      content: <ShareTribe />,
      title: 'Share Tribe Link',
    },
  };

  return (
    <>
      <DrawerModal
        isOpen={isOpen}
        onClose={onClose}
        headingText={active[activeContent].title}
        size="md"
      >
        {active[activeContent].content}
      </DrawerModal>
      <Box
        px={2}
        w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)' }}
        minHeight={'100vh'}
        css={{
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex alignItems="center" justifyContent="space-between" marginTop={2}>
          <Box>
            <Heading
              as="h4"
              // display={{ base: 'none', md: 'block' }}
              fontSize="2xl"
              fontWeight="bold"
            >
              Tribe
            </Heading>
            <Text
              fontSize={'12px'}
              textOverflow="ellipsis"
              color={`${Colors.gray400}`}
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {isLargerthan500px ? profileLink : profileLink.substring(10, 22)}
            </Text>
          </Box>
          <Box>
            <IconButton
              handleClick={onOpen}
              text={'Create new tribe'}
              icon={<FiPlus style={{ width: '10px', height: '10px' }} />}
              fontSize={'15px'}
              bg={'#121212'}
              width={'167px'}
              height={'40px'}
              px={'24px'}
              py={'10px'}
              pr="12px"
            />
          </Box>
        </Flex>

        {/* Selected Tabs & Contents */}

        <Flex
          flexWrap={'nowrap'}
          overflow="auto"
          css={{
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: '-ms-autohiding-scrollbar',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          alignItems="center"
          justifyContent="flex-start"
          marginTop={{ base: '24px', md: '32px' }}
          marginBottom={{ base: '22px', md: '32px' }}
        >
          <Box mr={'32px'}>
            <Heading
              as="h2"
              pb="12px"
              onClick={() => {
                setPage('yourTribe');
              }}
              color={page === 'yourTribe' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'yourTribe' ? '2px solid #FF5403' : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Your Tribe{' '}
              {isLargerthan500px && (
                <Text
                  as="span"
                  w="16px"
                  h="16px"
                  borderRadius="50%"
                  bgColor={page === 'yourTribe' ? '#FFEEE7' : Colors.gray100}
                  color={page === 'yourTribe' ? Colors.orange : Colors.gray400}
                  px="6px"
                  py="2px"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="12px"
                  ml="4px"
                >
                  {yourTribeNail.length}
                </Text>
              )}
            </Heading>
          </Box>
          <Box mr={'32px'}>
            <Heading
              onClick={() => {
                setPage('tribesJoined');
              }}
              as="h2"
              pb="12px"
              color={page === 'tribesJoined' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'tribesJoined'
                  ? '2px solid #FF5403'
                  : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Tribes you've joined{' '}
              {isLargerthan500px && (
                <Text
                  as="span"
                  w="16px"
                  h="16px"
                  borderRadius="50%"
                  bgColor={page === 'tribesJoined' ? '#FFEEE7' : Colors.gray100}
                  color={
                    page === 'tribesJoined' ? Colors.orange : Colors.gray400
                  }
                  px="6px"
                  py="2px"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="12px"
                  ml="4px"
                >
                  {tribesJoinedNail.length}
                </Text>
              )}
            </Heading>
          </Box>
          <Box>
            <Heading
              onClick={() => {
                setPage('discoverTribes');
              }}
              as="h2"
              pb="12px"
              color={page === 'discoverTribes' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'discoverTribes'
                  ? '2px solid #FF5403'
                  : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Discover Tribes
            </Heading>
          </Box>
        </Flex>
        {page === 'yourTribe' ? (
          hasContent ? (
            <Box w="100%">
              <Grid
                templateColumns="repeat(auto-fit, minmax(236px, 1fr))"
                gap="24px"
              >
                {yourTribeNail.map((data) => (
                  <GridItem w="100%" key={data.id} position="relative">
                    <Box borderRadius="12px" height="149px" overflow="hidden">
                      <Image
                        src={data.image}
                        alt="tribe"
                        objectFit="cover"
                        boxSize="100%"
                      />
                    </Box>
                    <Flex
                      justifyContent={'space-between'}
                      alignItems="center"
                      mt="20px"
                    >
                      <Heading
                        as="h3"
                        fontSize={'16px'}
                        textColor={Colors.primaryBlack}
                      >
                        {data.title}
                      </Heading>
                      <Box></Box>
                      <PopOver options={popOverLinks} />
                    </Flex>
                    <Flex
                      as="p"
                      alignItems="center"
                      fontSize="14px"
                      textColor={Colors.gray400}
                      mt="10px"
                    >
                      <Box>{data.amount}</Box>{' '}
                      <Box
                        w="2px"
                        h="2px"
                        mx="6px"
                        bg={Colors.gray300}
                        borderRadius="50%"
                      ></Box>{' '}
                      <Box>{data.status}</Box>
                    </Flex>
                    <Flex
                      marginBottom={'20px'}
                      mt="10px"
                      w="100%"
                      alignItems="center"
                    >
                      {data.membersImage.slice(0, 4).map((pic) => (
                        <Image
                          sx={{
                            '&:not(&:last-child)': {
                              marginRight: '-8px',
                            },
                          }}
                          width={6}
                          h={6}
                          src={pic}
                          alt="user thumbnail"
                        />
                      ))}
                      <Text
                        textColor={Colors.primaryBlack}
                        bgColor={Colors.gray100}
                        fontSize={'12px'}
                        borderRadius="100px"
                        border="2px solid #FFFFFF"
                        px="8px"
                        py="6px"
                        whiteSpace="nowrap"
                      >
                        {`${data.membersImage.length} members`}
                      </Text>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ) : (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box width={'294px'}>
                <Image src={EMPTY} alt="empty" display="block" mx="auto" />
                <Heading
                  as="h2"
                  mb={'36px'}
                  fontSize={'2xl'}
                  textAlign="center"
                >
                  Create a community of doers or followers.
                </Heading>
                <Text
                  fontSize={'14px'}
                  mb={'36px'}
                  textAlign="center"
                  color={`${Colors.gray400}`}
                >
                  Create a community, reach more audience. Add membership
                  conditions on your terms.
                </Text>
                <Center>
                  <Button text="Create a tribe" width="200px" />
                </Center>
              </Box>
              <Flex
                position="fixed"
                bottom={{ base: '81px', md: '60px' }}
                right={{ base: '20px', md: '60px' }}
              >
                <IconButton
                  bg={Colors.primaryBlack}
                  width="43px"
                  height="43px"
                  borderRadius="full"
                  justifyContent="center"
                  alignItems="center"
                  py="1px"
                  icon={
                    <Image
                      ml="10px"
                      textAlign="center"
                      src={CHAT}
                      alt="chat"
                      width="15px"
                      height="15px"
                    />
                  }
                />
              </Flex>
            </Flex>
          )
        ) : page === 'tribesJoined' ? (
          hasContent ? (
            <Box w="100%">
              <Grid
                templateColumns="repeat(auto-fit, minmax(236px, 1fr))"
                gap="24px"
              >
                {tribesJoinedNail.map((data) => (
                  <GridItem w="100%" key={data.id}>
                    <Box borderRadius="12px" height="149px" overflow="hidden">
                      <Image
                        src={data.image}
                        alt="tribe"
                        objectFit="cover"
                        boxSize="100%"
                      />
                    </Box>
                    <Flex
                      justifyContent={'space-between'}
                      alignItems="center"
                      mt="20px"
                    >
                      <Heading
                        as="h3"
                        fontSize={'16px'}
                        textColor={Colors.primaryBlack}
                      >
                        {data.title}
                      </Heading>
                      <PopOver options={popOverLinks} />
                    </Flex>
                    <Flex mt="10px" mb="20px" w="100%" alignItems="center">
                      {data.membersImage.slice(0, 4).map((pic: any) => (
                        <Image
                          sx={{
                            '&:not(&:last-child)': {
                              marginRight: '-8px',
                            },
                          }}
                          width={6}
                          h={6}
                          src={pic}
                          alt="user thumbnail"
                        />
                      ))}
                      <Text
                        textColor={Colors.primaryBlack}
                        bgColor={Colors.gray100}
                        fontSize={'12px'}
                        borderRadius="100px"
                        border="2px solid #FFFFFF"
                        px="8px"
                        py="6px"
                        whiteSpace="nowrap"
                      >
                        {`${data.membersImage.length} members`}
                      </Text>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ) : (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box width={'294px'}>
                <Image src={EMPTY} alt="empty" display="block" mx="auto" />
                <Heading
                  as="h2"
                  mb={'36px'}
                  fontSize={'2xl'}
                  textAlign="center"
                >
                  Create a community of doers or followers.
                </Heading>
                <Text
                  fontSize={'14px'}
                  mb={'36px'}
                  textAlign="center"
                  color={`${Colors.gray400}`}
                >
                  Create a community, reach more audience. Add membership
                  conditions on your terms.
                </Text>
                <Center>
                  <Button text="Create a tribe" width="200px" />
                </Center>
              </Box>
              <Flex
                position="fixed"
                bottom={{ base: '81px', md: '60px' }}
                right={{ base: '20px', md: '60px' }}
              >
                <IconButton
                  bg={Colors.primaryBlack}
                  width="43px"
                  height="43px"
                  borderRadius="full"
                  justifyContent="center"
                  alignItems="center"
                  py="1px"
                  icon={
                    <Image
                      ml="10px"
                      textAlign="center"
                      src={CHAT}
                      alt="chat"
                      width="15px"
                      height="15px"
                    />
                  }
                />
              </Flex>
            </Flex>
          )
        ) : hasContent ? (
          <Box w="100%">
            <Flex
              my="30px"
              alignItems="center"
              justifyContent={{ base: 'space-between', sm: 'start' }}
              width="100%"
            >
              <Flex
                bg={Colors.gray100}
                px="18px"
                width={{ base: '69%', sm: '351px' }}
                borderRadius="100px"
                alignItems="center"
              >
                <FiSearch style={{ color: '#717477', cursor: 'pointer' }} />
                <Input
                  type="search"
                  color={Colors.gray300}
                  fontSize="14px"
                  py="10px"
                  border="none"
                  placeholder="Search for Tribes"
                  focusBorderColor="none"
                  _focus={{ outlineWidth: 'none', boxShadow: 'none!important' }}
                  _active={{ boxShadow: 'none!important', border: 'none' }}
                />
              </Flex>
              <ShopFilter />
              {/*  <Flex
                as="button"
                bg="transparent"
                border={`1px solid ${Colors.gray100}`}
                borderRadius="100px"
                alignItems="center"
                justifyContent="center"
                py="10px"
                px="12px"
                color={`${Colors.primaryBlack}`}
                fontSize="15px"
                width={{ base: '25%', sm: '86px' }}
                ml={{ base: '0', sm: '16px' }}
              >
                <Box pr="4px">Filter</Box>
                <Image
                  cursor="pointer"
                  src={CHEVRON_DOWN}
                  alt="expand more"
                  style={{
                    color: `${Colors.gray300}`,
                    height: '5px',
                  }}
                />
              </Flex> */}
            </Flex>
            <Grid
              templateColumns="repeat(auto-fit, minmax(236px, 1fr))"
              gap="24px"
            >
              {discoverTribesNail.map((data) => (
                <TribeCard data={data} key={data.id} />
              ))}
            </Grid>
          </Box>
        ) : (
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box width={'294px'}>
              <Image src={EMPTY} alt="empty" display="block" mx="auto" />
              <Heading as="h2" mb={'36px'} fontSize={'2xl'} textAlign="center">
                Create a community of doers or followers.
              </Heading>
              <Text
                fontSize={'14px'}
                mb={'36px'}
                textAlign="center"
                color={`${Colors.gray400}`}
              >
                Create a community, reach more audience. Add membership
                conditions on your terms.
              </Text>
              <Center>
                <Button text="Create a tribe" width="200px" />
              </Center>
            </Box>
            <Flex
              position="fixed"
              bottom={{ base: '81px', md: '60px' }}
              right={{ base: '20px', md: '60px' }}
            >
              <IconButton
                bg={Colors.primaryBlack}
                width="43px"
                height="43px"
                borderRadius="full"
                justifyContent="center"
                alignItems="center"
                py="1px"
                icon={
                  <Image
                    ml="10px"
                    textAlign="center"
                    src={CHAT}
                    alt="chat"
                    width="15px"
                    height="15px"
                  />
                }
              />
            </Flex>
          </Flex>
        )}
        <Spacer height={{ base: '84px', md: '0' }} />
      </Box>
    </>
  );
};
export default MyTribeRender;
