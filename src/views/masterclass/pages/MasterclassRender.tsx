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
  Stack,
  Stat,
  StatHelpText,
  StatArrow,
  chakra,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { view_module, toc } from '../../../assets/images';
import { FiPlus, FiSearch, FiAlertCircle } from 'react-icons/fi';
import IconButton from '../../../components/IconButton';
import { Colors } from '../../../constants';
import EMPTY from '../../../assets/svgs/tribe/empty-tribe.svg';
import SHARE from '../../../assets/svgs/digital/icons/share.svg';
import UPLOAD from '../../../assets/svgs/digital/icons/upload.svg';
import {
  classesNail,
  analyticsNail,
  topClassNail,
  transactionsNail,
  popOverLinks,
} from '../constants';
import TimeBadge from 'compositions/TimeBadge';
import PageOverview from 'compositions/PageOverview';
import ShopFilter from './components/ShopFilter';
import DrawerModal from 'components/Modal';
import ClassDetails from './components/ClassDetails';
import PopOver from 'components/PopOver';
import AddClass from './components/AddClass';
import ShareClass from './components/ShareClass';

export enum CurrentContentEnum {
  ClassDetails = 1,
  AddClass = 2,
  ShareClass = 3,
}

const MasterclassRender = () => {
  const [isLargerthan500px] = useMediaQuery('(min-width: 500px)');
  const [isLargerthan994px] = useMediaQuery('(min-width: 994px)');
  const [page, setPage] = useState('classes');
  const [view, setView] = useState('Grid');
  const [hasContent] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = useState(
    CurrentContentEnum.ClassDetails
  );

  const [classDetail, setClassDetail] = useState<any | null>(null); // TODO : add proper type i.e IProductData | null

  const active: any = {
    [CurrentContentEnum.ClassDetails]: {
      content: (
        <ClassDetails
          classData={classDetail}
          onChangeContent={setActiveContent}
        />
      ),
      title: 'Class Details',
    },
    [CurrentContentEnum.AddClass]: {
      content: (
        <AddClass classData={classDetail} onChangeContent={setActiveContent} />
      ),
      title: 'Add Class',
    },
    [CurrentContentEnum.ShareClass]: {
      content: (
        <ShareClass
          classData={classDetail}
          onChangeContent={setActiveContent}
        />
      ),
      title: 'Share Link',
    },
  };

  const handleClickClassCard = (data: any) => {
    setActiveContent(CurrentContentEnum.ClassDetails);
    setClassDetail(data);
    onOpen();
  };

  const handleClickNewClass = () => {
    setActiveContent(CurrentContentEnum.AddClass);
    onOpen();
  };

  const handleClickShareClass = () => {
    setActiveContent(CurrentContentEnum.ShareClass);
    onOpen();
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
              Masterclass
            </Heading>
          </Box>
          <Flex>
            <IconButton
              justifyContent={'center'}
              text={isLargerthan994px ? 'Share link' : ''}
              icon={
                <Image
                  src={SHARE}
                  alt="share"
                  style={{ width: '15px', height: '15px' }}
                />
              }
              fontSize={'15px'}
              bg={'#E5E8F0'}
              width={isLargerthan994px ? '176px' : '0px'}
              height={isLargerthan994px ? '40px' : '0px'}
              px={isLargerthan994px ? '24px' : '10px'}
              py={'10px'}
              pr={isLargerthan994px ? '12px' : '0px'}
              mr={'16px'}
              color={'#91989E'}
              handleClick={() => handleClickShareClass()}
            />
            <IconButton
              text={isLargerthan994px ? 'Create new class' : ''}
              icon={<FiPlus style={{ width: '10px', height: '10px' }} />}
              fontSize={'15px'}
              bg={'#121212'}
              width={isLargerthan994px ? '176px' : '0px'}
              height={isLargerthan994px ? '40px' : '0px'}
              px={isLargerthan994px ? '24px' : '12.5px'}
              py={'10px'}
              pr={isLargerthan994px ? '12px' : '0px'}
              handleClick={() => handleClickNewClass()}
            />
          </Flex>
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
                setPage('classes');
              }}
              color={page === 'classes' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'classes' ? '2px solid #FF5403' : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Classes{' '}
              {isLargerthan500px && (
                <Text
                  as="span"
                  w="16px"
                  h="16px"
                  borderRadius="50%"
                  bgColor={page === 'classes' ? '#FFEEE7' : Colors.gray100}
                  color={page === 'classes' ? Colors.orange : Colors.gray400}
                  px="6px"
                  py="2px"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="12px"
                  ml="4px"
                >
                  {classesNail.length}
                </Text>
              )}
            </Heading>
          </Box>
          <Box mr={'32px'}>
            <Heading
              onClick={() => {
                setPage('analytics');
              }}
              as="h2"
              pb="12px"
              color={page === 'analytics' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'analytics' ? '2px solid #FF5403' : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Analytics
            </Heading>
          </Box>
          <Box>
            <Heading
              onClick={() => {
                setPage('transactions');
              }}
              as="h2"
              pb="12px"
              color={page === 'transactions' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'transactions'
                  ? '2px solid #FF5403'
                  : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Transactions
            </Heading>
          </Box>
        </Flex>
        {page === 'classes' ? (
          hasContent ? (
            <Box w="100%">
              <Flex
                mb="30px"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Flex>
                  <Flex
                    bg={Colors.gray100}
                    px="18px"
                    width={{ base: '69%', md: '351px' }}
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
                      placeholder="Search classes..."
                      focusBorderColor="none"
                      _focus={{
                        outlineWidth: 'none',
                        boxShadow: 'none!important',
                      }}
                      _active={{ boxShadow: 'none!important', border: 'none' }}
                    />
                  </Flex>
                  <ShopFilter />
                </Flex>
                <Flex
                  justifyContent={'center'}
                  alignItems={'center'}
                  maxWidth="90px"
                  border={`1px solid ${Colors.gray100}`}
                  borderRadius={'30px'}
                  textAlign="center"
                >
                  <Box
                    py={'4px'}
                    width="45px"
                    cursor={'pointer'}
                    borderRadius="30px"
                    backgroundColor={
                      view === 'Grid' ? '#e1e4eb' : 'transparent'
                    }
                    onClick={() => {
                      setView('Grid');
                    }}
                  >
                    <chakra.img
                      display={'inline'}
                      src={view_module}
                      alt="Grid"
                    />
                  </Box>
                  <Box
                    py={'4px'}
                    width="45px"
                    cursor={'pointer'}
                    borderRadius="30px"
                    backgroundColor={
                      view === 'List' ? '#e1e4eb' : 'transparent'
                    }
                    onClick={() => {
                      setView('List');
                    }}
                  >
                    <chakra.img display={'inline'} src={toc} alt="List" />
                  </Box>
                </Flex>
              </Flex>
              {view === 'Grid' && (
                <Grid
                  templateColumns="repeat(auto-fit, minmax(236px, 1fr))"
                  gap="24px"
                >
                  {classesNail.map((data: any) => (
                    <GridItem w="100%" key={data.id}>
                      <Box
                        onClick={() => handleClickClassCard(data)}
                        cursor="pointer"
                        borderRadius="10px"
                        height="202px"
                        overflow="hidden"
                        position="relative"
                      >
                        <Flex
                          px={'8px'}
                          py={'4px'}
                          alignItems="center"
                          justifyContent="center"
                          position="absolute"
                          top="12px"
                          left="12px"
                          bg="rgba(6, 5, 27, 0.6)"
                          borderRadius="100px"
                        >
                          <Box
                            bg={
                              data.status === 'Active'
                                ? 'secondaryGreen'
                                : 'secondaryYellow'
                            }
                            w="6px"
                            h="6px"
                            borderRadius="50%"
                            fontWeight={'normal'}
                            mr="4px"
                          ></Box>
                          <Text color="white" fontSize="12px">
                            {data.status === 'Active' ? 'Active' : 'Archived'}
                          </Text>
                        </Flex>
                        <Image
                          src={data.image}
                          alt="products"
                          objectFit="cover"
                          boxSize="100%"
                        />
                      </Box>
                      <Flex
                        justifyContent={'space-between'}
                        alignItems="start"
                        mt="20px"
                      >
                        <Heading
                          onClick={() => handleClickClassCard(data)}
                          cursor="pointer"
                          as="h3"
                          fontSize={'16px'}
                          textColor={Colors.primaryBlack}
                          width="200px"
                        >
                          {data.title.substring(0, 55)}
                        </Heading>
                        <PopOver classData={data} options={popOverLinks} />
                      </Flex>
                      <Flex
                        as="p"
                        alignItems="center"
                        fontSize="14px"
                        textColor={Colors.gray400}
                        mt="10px"
                        mb="20px"
                      >
                        <Box>{data.amount}</Box>{' '}
                        <Box
                          w="2px"
                          h="2px"
                          mx="6px"
                          bg={Colors.gray300}
                          borderRadius="50%"
                        ></Box>{' '}
                        <Box>{data.numberSold}</Box>
                      </Flex>
                    </GridItem>
                  ))}
                </Grid>
              )}
              {view === 'List' && (
                <Box>
                  <Stack
                    overflowX={'auto'}
                    flexWrap={'nowrap'}
                    css={{
                      WebkitOverflowScrolling: 'touch',
                      msOverflowStyle: '-ms-autohiding-scrollbar',
                      '&::-webkit-scrollbar': {
                        display: 'none',
                      },
                    }}
                  >
                    {classesNail.slice(0, 8).map((data: any) => (
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        py={2}
                      >
                        <Flex
                          alignItems="center"
                          onClick={() => handleClickClassCard(data)}
                          cursor="pointer"
                        >
                          <Image
                            mr={3}
                            borderRadius="6px"
                            boxSize="48px"
                            objectFit="cover"
                            src={data.image}
                            alt="book"
                            alignSelf="center"
                          />
                          <Box>
                            <Text
                              textColor="primaryBlack"
                              width={{ base: '205px', md: '404px' }}
                              fontSize="sm"
                            >
                              {data.title.substring(0, 36)}
                            </Text>
                            <Flex
                              as="p"
                              alignItems="center"
                              fontSize="13px"
                              textColor={Colors.gray400}
                            >
                              <Box>{data.amount}</Box>{' '}
                              <Box
                                w="2px"
                                h="2px"
                                mx="6px"
                                bg={Colors.gray300}
                                borderRadius="50%"
                              ></Box>{' '}
                              <Box>{data.numberSold}</Box>
                              <Box
                                w="2px"
                                h="2px"
                                mx="6px"
                                bg={Colors.gray300}
                                borderRadius="50%"
                              ></Box>{' '}
                              <Text
                                color={
                                  data.status === 'Active'
                                    ? 'secondaryGreen'
                                    : '#E9AD14'
                                }
                                fontSize="13px"
                              >
                                {data.status === 'Active'
                                  ? 'Active'
                                  : 'Archived'}
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>
                        <Flex alignItems="center">
                          <PopOver classData={data} options={popOverLinks} />
                        </Flex>
                      </Flex>
                    ))}
                  </Stack>
                </Box>
              )}
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
                  Add your first class
                </Heading>
                <Text
                  fontSize={'14px'}
                  mb={'36px'}
                  textAlign="center"
                  color={`${Colors.gray400}`}
                >
                  Masterclasses are specialised events on specific (focused)
                  topics where subject matter experts will share their knowledge
                  with the attendees.
                </Text>
                <Center>
                  <IconButton
                    text={'Add class'}
                    fontSize={'15px'}
                    bg={'#121212'}
                    width={'176px'}
                    height={'40px'}
                    px={'24px'}
                    py={'10px'}
                  />
                </Center>
              </Box>
            </Flex>
          )
        ) : page === 'analytics' ? (
          hasContent ? (
            <Box w="100%">
              <Box mb={{ base: '24px', md: '30px' }}>
                <TimeBadge />
              </Box>
              <Grid
                templateColumns="repeat(auto-fit, minmax(236px, 1fr))"
                gap={{ base: '24px', md: '16px' }}
              >
                {analyticsNail.slice(0, 3).map((data: any) => (
                  <PageOverview
                    title={data.title}
                    timing={data.timing}
                    numbers={data.numbers}
                    percentage={data.percentage}
                    width={'100%'}
                    height={'163px'}
                    key={data.id}
                  />
                ))}
              </Grid>
              <Box
                p="4"
                my="16px"
                borderRadius="12px"
                border="1px solid #E5E8F0"
              >
                <Flex
                  alignItems="center"
                  flexDirection={{ base: 'column', md: 'row' }}
                  marginTop={2}
                  marginBottom={8}
                >
                  <Flex flexDirection="column">
                    <Heading as="h4" fontSize="md" fontWeight="bold">
                      Top classes by tickets sold
                    </Heading>
                    <Text
                      fontSize="14px"
                      alignSelf={{ base: 'center', md: 'start' }}
                      color="gray400"
                    >
                      March 2 - March 8
                    </Text>
                  </Flex>
                  <Spacer />
                  <Link to="/shop">
                    <Box as="span">
                      {<FiAlertCircle style={{ color: '#C4C4C4' }} />}
                    </Box>
                  </Link>
                </Flex>
                <Stack
                  overflowX={'auto'}
                  flexWrap={'nowrap'}
                  css={{
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: '-ms-autohiding-scrollbar',
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                >
                  {topClassNail.slice(0, 3).map((data: any) => (
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      py={2}
                    >
                      <Flex alignItems="center">
                        <Image
                          mr={3}
                          borderRadius="6px"
                          boxSize="48px"
                          objectFit="cover"
                          src={data.image}
                          alt="book"
                        />
                        <Text
                          textColor="primaryBlack"
                          fontSize="sm"
                          width={{ base: '120px', sm: '240px', md: '320px' }}
                          textOverflow="ellipsis"
                          overflow="hidden"
                          whiteSpace="nowrap"
                        >
                          {data.title}
                        </Text>
                      </Flex>
                      <Flex alignItems="center">
                        <Text
                          textColor="primaryBlack"
                          textAlign="right"
                          mr="18px"
                          fontSize="sm"
                          whiteSpace="nowrap"
                        >
                          {data.numberSold}
                        </Text>
                        <Stat>
                          <StatHelpText
                            textColor={
                              data.growth === 'increase'
                                ? 'secondaryGreen'
                                : '#E11900'
                            }
                            fontSize="sm"
                            mb="0px"
                            whiteSpace="nowrap"
                          >
                            <StatArrow
                              type={data.growth}
                              color={
                                data.growth === 'increase'
                                  ? 'secondaryGreen'
                                  : '#E11900'
                              }
                              whiteSpace="nowrap"
                            />
                            {data.percentage}
                          </StatHelpText>
                        </Stat>
                      </Flex>
                    </Flex>
                  ))}
                </Stack>
              </Box>
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
                  Add your first class
                </Heading>
                <Text
                  fontSize={'14px'}
                  mb={'36px'}
                  textAlign="center"
                  color={`${Colors.gray400}`}
                >
                  Masterclasses are specialised events on specific (focused)
                  topics where subject matter experts will share their knowledge
                  with the attendees.
                </Text>
                <Center>
                  <IconButton
                    text={'Add class'}
                    fontSize={'15px'}
                    bg={'#121212'}
                    width={'176px'}
                    height={'40px'}
                    px={'24px'}
                    py={'10px'}
                  />
                </Center>
              </Box>
            </Flex>
          )
        ) : hasContent ? (
          <Box w="100%">
            <Flex
              mb="30px"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Flex>
                <Flex
                  bg={Colors.gray100}
                  px="18px"
                  width={{ base: '56%', md: '240px', lg: '351px' }}
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
                    placeholder="Search transactions"
                    focusBorderColor="none"
                    _focus={{
                      outlineWidth: 'none',
                      boxShadow: 'none!important',
                    }}
                    _active={{ boxShadow: 'none!important', border: 'none' }}
                  />
                </Flex>
                <ShopFilter />
              </Flex>
              <Flex>
                <IconButton
                  justifyContent={'center'}
                  flexDirection="row-reverse"
                  text={isLargerthan994px ? 'Export CSV' : ''}
                  icon={
                    <Image
                      src={UPLOAD}
                      alt="upload"
                      style={{ width: '12px', height: '12px' }}
                    />
                  }
                  fontSize={'15px'}
                  bg={'transparent'}
                  width={isLargerthan994px ? '150px' : '0px'}
                  height={isLargerthan994px ? '40px' : '0px'}
                  px={isLargerthan994px ? '24px' : '12.5px'}
                  py={'12px'}
                  pl={isLargerthan994px ? '12px' : '0px'}
                  // mr={isLargerthan994px ? '16px' : '0px'}
                  border={'1px solid #E5E8F0'}
                  color="primaryBlack"
                />
              </Flex>
            </Flex>
            {/* transactions list */}
            <Box>
              <Stack
                overflowX={'auto'}
                flexWrap={'nowrap'}
                css={{
                  WebkitOverflowScrolling: 'touch',
                  msOverflowStyle: '-ms-autohiding-scrollbar',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {transactionsNail.slice(0, 8).map((data: any) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                    w="100%"
                  >
                    <Flex alignItems="center">
                      <Image
                        mr={3}
                        borderRadius="6px"
                        boxSize="48px"
                        objectFit="cover"
                        src={data.image}
                        alt="book"
                        alignSelf="center"
                      />
                      <Box>
                        <Text
                          textColor="primaryBlack"
                          fontSize="sm"
                          width={{ base: '160px', md: '404px' }}
                          textOverflow="ellipsis"
                          overflow="hidden"
                          whiteSpace="nowrap"
                        >
                          {`Payment from ${data.user}`}
                        </Text>
                        <Text
                          color={
                            data.status === 'Successful'
                              ? 'secondaryGreen'
                              : '#E9AD14'
                          }
                          fontSize="13px"
                        >
                          {data.status}
                        </Text>
                      </Box>
                    </Flex>
                    <Flex
                      alignItems="end"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Text
                        fontSize="16px"
                        textColor="primaryBlack"
                        fontWeight="bold"
                        textAlign="right"
                      >
                        {data.amount}
                      </Text>
                      <Text
                        fontSize="13px"
                        textColor={Colors.gray400}
                        textAlign="right"
                        whiteSpace="nowrap"
                        width="76px"
                      >
                        {data.timing}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </Stack>
            </Box>
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
                Add your first class
              </Heading>
              <Text
                fontSize={'14px'}
                mb={'36px'}
                textAlign="center"
                color={`${Colors.gray400}`}
              >
                Masterclasses are specialised events on specific (focused)
                topics where subject matter experts will share their knowledge
                with the attendees.
              </Text>
              <Center>
                <IconButton
                  text={'Add class'}
                  fontSize={'15px'}
                  bg={'#121212'}
                  width={'176px'}
                  height={'40px'}
                  px={'24px'}
                  py={'10px'}
                />
              </Center>
            </Box>
          </Flex>
        )}
        <Spacer height={{ base: '64px' }} />
      </Box>
    </>
  );
};
export default MasterclassRender;
