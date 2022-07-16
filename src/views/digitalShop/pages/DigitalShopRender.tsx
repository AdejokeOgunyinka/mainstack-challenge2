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
  Stack,
  Stat,
  StatHelpText,
  StatArrow,
  chakra,
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
  productsNail,
  analyticsNail,
  customersNail,
  topProductNail,
  transactionsNail,
  popOverLinks,
} from '../constants';
import TimeBadge from 'compositions/TimeBadge';
import PageOverview from 'compositions/PageOverview';
import ShopFilter from './components/ShopFilter';
import DrawerModal from 'components/Modal';
import ProductDetails from './components/ProductDetails';
import PopOver from 'components/PopOver';
import ShareProduct from './components/ShareProduct';
import AddProduct from './components/AddProduct';

export enum CurrentContentEnum {
  ProductDetails = 1,
  AddProduct = 2,
  ShareProduct = 3,
}

const DigitalShopRender = () => {
  const [isLargerthan500px] = useMediaQuery('(min-width: 500px)');
  const [isLargerthan994px] = useMediaQuery('(min-width: 994px)');
  const profileLink = 'mainstack.me/blessingdaniells/digitalshop';
  const [page, setPage] = useState('products');
  const [view, setView] = useState('Grid');
  const [hasContent] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = useState(
    CurrentContentEnum.ProductDetails
  );

  const [productDetail, setProductDetail] = useState<any | null>(null); // TODO : add proper type i.e IProductData | null

  const active: any = {
    [CurrentContentEnum.ProductDetails]: {
      content: (
        <ProductDetails
          productData={productDetail}
          onChangeContent={setActiveContent}
        />
      ),
      title: 'Product Details',
    },
    [CurrentContentEnum.AddProduct]: {
      content: (
        <AddProduct
          productData={productDetail}
          onChangeContent={setActiveContent}
        />
      ),
      title: 'Create New Product',
    },
    [CurrentContentEnum.ShareProduct]: {
      content: (
        <ShareProduct
          productData={productDetail}
          onChangeContent={setActiveContent}
        />
      ),
      title: 'Share Link',
    },
  };

  const handleClickProductCard = (data: any) => {
    setActiveContent(CurrentContentEnum.ProductDetails);
    setProductDetail(data);
    onOpen();
  };

  const handleClickNewProduct = () => {
    setActiveContent(CurrentContentEnum.AddProduct);
    onOpen();
  };

  const handleClickShareProduct = () => {
    setActiveContent(CurrentContentEnum.ShareProduct);
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
              Digital shop
            </Heading>
            <Text
              fontSize={'12px'}
              color={`${Colors.gray400}`}
              textOverflow="ellipsis"
              width="140px"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {profileLink}
            </Text>
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
              handleClick={() => handleClickShareProduct()}
            />
            <IconButton
              text={isLargerthan994px ? 'Add new product' : ''}
              icon={<FiPlus style={{ width: '10px', height: '10px' }} />}
              fontSize={'15px'}
              bg={'#121212'}
              width={isLargerthan994px ? '176px' : '0px'}
              height={isLargerthan994px ? '40px' : '0px'}
              px={isLargerthan994px ? '24px' : '12.5px'}
              py={'10px'}
              pr={isLargerthan994px ? '12px' : '0px'}
              handleClick={() => handleClickNewProduct()}
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
                setPage('products');
              }}
              color={page === 'products' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'products' ? '2px solid #FF5403' : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Products{' '}
              {isLargerthan500px && (
                <Text
                  as="span"
                  w="16px"
                  h="16px"
                  borderRadius="50%"
                  bgColor={page === 'products' ? '#FFEEE7' : Colors.gray100}
                  color={page === 'products' ? Colors.orange : Colors.gray400}
                  px="6px"
                  py="2px"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="12px"
                  ml="4px"
                >
                  {productsNail.length}
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
          <Box mr={'32px'}>
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
          <Box>
            <Heading
              onClick={() => {
                setPage('customers');
              }}
              as="h2"
              pb="12px"
              color={page === 'customers' ? Colors.orange : Colors.gray400}
              borderBottom={
                page === 'customers' ? '2px solid #FF5403' : '2px solid white '
              }
              cursor="pointer"
              // display={{ base: 'none', md: 'block' }}
              fontSize="medium"
              fontWeight="normal"
              whiteSpace="nowrap"
            >
              Customers
            </Heading>
          </Box>
        </Flex>
        {page === 'products' ? (
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
                      placeholder="Search product..."
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
                  {productsNail.map((data: any) => (
                    <GridItem w="100%" key={data.id}>
                      <Box
                        onClick={() => handleClickProductCard(data)}
                        cursor="pointer"
                        borderRadius="12px"
                        height="149px"
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
                          onClick={() => handleClickProductCard(data)}
                          cursor="pointer"
                          as="h3"
                          fontSize={'16px'}
                          textColor={Colors.primaryBlack}
                          width="200px"
                        >
                          {data.title.substring(0, 55)}
                        </Heading>
                        <PopOver options={popOverLinks} productData={data} />
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
                    {productsNail.slice(0, 8).map((data: any) => (
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        py={2}
                      >
                        <Flex
                          alignItems="center"
                          onClick={() => handleClickProductCard(data)}
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
                              onClick={onOpen}
                              cursor="pointer"
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
                                    : 'secondaryYellow'
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
                          <PopOver options={popOverLinks} productData={data} />
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
                  Add your first product
                </Heading>
                <Text
                  fontSize={'14px'}
                  mb={'36px'}
                  textAlign="center"
                  color={`${Colors.gray400}`}
                >
                  You are a few steps away from making those sales. Let's add
                  your first product so you can start selling.
                </Text>
                <Center>
                  <IconButton
                    text={'Add new product'}
                    icon={<FiPlus style={{ width: '10px', height: '10px' }} />}
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
                      Top products by units sold
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
                  {topProductNail.slice(0, 6).map((data: any) => (
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
                                : 'secondaryRed'
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
                                  : 'secondaryRed'
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
                  Add your first product
                </Heading>
                <Text
                  fontSize={'14px'}
                  mb={'36px'}
                  textAlign="center"
                  color={`${Colors.gray400}`}
                >
                  You are a few steps away from making those sales. Let's add
                  your first product so you can start selling.
                </Text>
                <Center>
                  <IconButton
                    text={'Add new product'}
                    icon={<FiPlus style={{ width: '10px', height: '10px' }} />}
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
        ) : page === 'transactions' ? (
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
                  {/* <Flex
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
                          textColor="gray400"
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
                <Heading
                  as="h2"
                  mb={'36px'}
                  fontSize={'2xl'}
                  textAlign="center"
                >
                  Add your first product
                </Heading>
                <Text
                  fontSize={'14px'}
                  mb={'36px'}
                  textAlign="center"
                  color={`${Colors.gray400}`}
                >
                  You are a few steps away from making those sales. Let's add
                  your first product so you can start selling.
                </Text>
                <Center>
                  <IconButton
                    text={'Add new product'}
                    icon={<FiPlus style={{ width: '10px', height: '10px' }} />}
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
              my="30px"
              alignItems="center"
              justifyContent="space-between"
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
                  placeholder="Search customers"
                  focusBorderColor="none"
                  _focus={{ outlineWidth: 'none', boxShadow: 'none!important' }}
                  _active={{ boxShadow: 'none!important', border: 'none' }}
                />
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
                  border={'1px solid #E5E8F0'}
                  color="primaryBlack"
                />
              </Flex>
            </Flex>
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
                {customersNail.slice(0, 8).map((data: any) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                  >
                    <Flex alignItems="center">
                      <Flex
                        mr={3}
                        p={4}
                        bg="#E5E8F0"
                        w={12}
                        h={12}
                        borderRadius="50%"
                        justifyContent="center"
                        alignItems="center"
                        textColor="primaryBlack"
                      >
                        {data.initials}
                      </Flex>

                      <Box>
                        <Text
                          textColor="primaryBlack"
                          width="163px"
                          fontSize="16px"
                          mb={2}
                        >
                          {data.user}
                        </Text>
                        <Text
                          alignItems="center"
                          width="200px"
                          fontSize="13px"
                          textColor={Colors.gray400}
                        >
                          {data.email}
                        </Text>
                      </Box>
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
                Add your first product
              </Heading>
              <Text
                fontSize={'14px'}
                mb={'36px'}
                textAlign="center"
                color={`${Colors.gray400}`}
              >
                You are a few steps away from making those sales. Let's add your
                first product so you can start selling.
              </Text>
              <Center>
                <IconButton
                  text={'Add new product'}
                  icon={<FiPlus style={{ width: '10px', height: '10px' }} />}
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
        <Spacer height={{ base: '84px', md: '0' }} />
      </Box>
    </>
  );
};
export default DigitalShopRender;
