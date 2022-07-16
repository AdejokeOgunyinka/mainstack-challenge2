import React, { useState } from 'react';
import {
  Button as ChakraBtn,
  Box,
  Text,
  Heading,
  Flex,
  Link,
  Grid,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';
import { Icon } from '@chakra-ui/icons';
import { RiSearch2Line } from 'react-icons/ri';
import DrawerModal from '../../../../components/Modal';
import InviteFriends from '../InviteFriends';
import BecomeAffiliate from '../BecomeAnAffiliate';

const transactionData = [
  {
    id: 1,
    name: 'Courtney Henrey',
    icon: 'CH',
    mail: 'courtneyhenry@gmail.com',
  },
  {
    id: 2,
    name: 'Wahley White',
    icon: 'WW',
    mail: 'wahleywhite@gmail.com',
  },
  {
    id: 3,
    name: 'Young David',
    icon: 'YD',
    mail: 'youngdavid@gmail.com',
  },
  {
    id: 4,
    name: 'Courtney Henry',
    icon: 'CH',
    mail: 'courtneyhenry@gmail.com',
  },
];

const ReferAndEarnContent = () => {
  const [show, setShow] = useState(false);

  const {
    isOpen: isInviteOpen,
    onOpen: onInviteOpen,
    onClose: onInViteClose,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <Box width={'100%'}>
      <DrawerModal
        headingText={'Become Affiliate'}
        size={'md'}
        isOpen={isInviteOpen}
        onClose={onInViteClose}
        contentFooter={
          <ChakraBtn
            onClick={() => {
              setShow(true);
              onInViteClose();
            }}
            ref={btnRef}
            height={'40px'}
            borderRadius={'100px'}
            color={'white'}
            bg={Colors.primaryBlack}
            width={'100%'}
          >
            Proceed
          </ChakraBtn>
        }
      >
        <BecomeAffiliate />
      </DrawerModal>
      <Flex mb={'46px'} justifyContent={'space-between'}>
        <Heading fontSize={'18px'}>Refer and earn</Heading>
        <ChakraBtn
          onClick={onInviteOpen}
          width={'100%'}
          ref={btnRef}
          h={'40px'}
          borderRadius={'100px'}
          maxWidth={{ base: '114px', md: '183px' }}
          bg={Colors.primaryBlack}
          color={Colors.white}
        >
          <Text display={{ base: 'block', md: 'none' }} fontSize={'15px'}>
            {' '}
            Join
          </Text>
          <Text display={{ base: 'none', md: 'block' }} fontSize={'15px'}>
            {' '}
            Become an Afiliate
          </Text>
        </ChakraBtn>
      </Flex>
      <Box
        padding={'24px'}
        h={'180px'}
        width={'100%'}
        mb={'23px'}
        bg={'#FFEEE7'}
        borderRadius={'8px'}
      >
        <Text color={Colors.primaryBlack} fontSize={'18px'}>
          Become a Mainstack afffiliate
        </Text>
        <Text color={'#242429'} fontSize={'14px'}>
          Refer and earn cash rewards via Mainstack
        </Text>
        <ChakraBtn
          mt={'23px'}
          width={'100%'}
          h={'40px'}
          borderRadius={'100px'}
          maxWidth={'146px'}
          bg={Colors.white}
          color={Colors.primaryBlack}
        >
          <Text fontSize={'15px'}> Learn more</Text>
        </ChakraBtn>
      </Box>

      <>
        {show ? (
          <Box>
            <Box
              padding={'24px'}
              h={{ base: '248px', md: '180px' }}
              width={'100%'}
              mb={'23px'}
              bg={Colors.white}
              borderRadius={'8px'}
              border={'1px solid #E5E8F0'}
            >
              {' '}
              <Text color={Colors.primaryBlack} fontSize={'18px'}>
                Your Affiliate Link
              </Text>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                alignItems={{ md: 'center' }}
              >
                <Box width={'480px'}>
                  <Text color={'#505A73'} fontSize={'16px'}>
                    You and your friends earn cash reward when they signup and
                    save with your referral link or code.
                  </Text>
                </Box>

                <Flex
                  width={'100%'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  maxWidth={'378px'}
                  // maxWidth={'375px'}
                  // justifyContent={'space-between'}
                >
                  <ChakraBtn
                    ref={btnRef}
                    onClick={onOpen}
                    mt={'23px'}
                    width={'100%'}
                    h={'40px'}
                    borderRadius={'100px'}
                    maxWidth={'183px'}
                    mr={'12px'}
                    bg={Colors.orange}
                    color={Colors.white}
                  >
                    <Text fontWeight={'lighter'} fontSize={'15px'}>
                      Invite friends
                    </Text>
                  </ChakraBtn>
                  <ChakraBtn
                    mt={'23px'}
                    width={'100%'}
                    h={'40px'}
                    borderRadius={'100px'}
                    maxWidth={'183px'}
                    bg={Colors.orange}
                    color={Colors.white}
                  >
                    <Text fontWeight={'lighter'} fontSize={'15px'}>
                      Share referral link
                    </Text>
                  </ChakraBtn>
                </Flex>
              </Flex>
              <Link fontSize={'16px'} color={Colors.orange} href={'/'}>
                www.mainstack.io/marvjones
              </Link>
            </Box>

            <Flex direction={{ base: 'column', md: 'row' }}>
              <Box
                padding={'40px'}
                mr={'24px'}
                h={'246px'}
                width={'100%'}
                maxWidth={{ base: '100%', md: '320px' }}
                mb={'23px'}
                bg={Colors.white}
                borderRadius={'8px'}
                border={'1px solid #E5E8F0'}
              >
                {' '}
                <Text color={Colors.primaryBlack} fontSize={'18px'}>
                  Total rewards earned
                </Text>
                <Flex
                  // bg={'red'}
                  direction={{ base: 'column', md: 'row' }}
                  // justifyContent={'space-between'}
                  alignItems={{ md: 'center' }}
                >
                  <Text color={Colors.primaryBlack} fontSize={'32px'}>
                    $ 20,850.00
                  </Text>
                  <Text
                    fontSize={'14px'}
                    ml={'8px'}
                    color={Colors.secondaryGreen}
                  >
                    100%
                  </Text>
                </Flex>
                <ChakraBtn
                  mt={'40px'}
                  width={'100%'}
                  h={'40px'}
                  borderRadius={'100px'}
                  maxWidth={'320px'}
                  bg={Colors.primaryBlack}
                  color={Colors.white}
                >
                  <Text fontWeight={'lighter'} fontSize={'15px'}>
                    Cash Out
                  </Text>
                </ChakraBtn>
              </Box>
              <Grid
                width={'100%'}
                maxWidth={'672px'}
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                }}
              >
                <Box
                  padding={'24px'}
                  h={'111px'}
                  width={'100%'}
                  maxWidth={{ base: 'none', md: '324px' }}
                  mb={'23px'}
                  bg={Colors.white}
                  borderRadius={'8px'}
                  border={'1px solid #E5E8F0'}
                >
                  <Text fontSize={'16px'} color={Colors.primaryBlack}>
                    Current Sign Ups
                  </Text>
                  <Text fontSize={'24px'} mb={'15px'}>
                    453
                  </Text>
                </Box>
                <Box
                  padding={'24px'}
                  h={'111px'}
                  width={'100%'}
                  maxWidth={'324px'}
                  mb={'23px'}
                  bg={Colors.white}
                  borderRadius={'8px'}
                  border={'1px solid #E5E8F0'}
                >
                  <Text fontSize={'16px'} color={Colors.primaryBlack}>
                    Total link clicks
                  </Text>
                  <Text fontSize={'24px'} mb={'15px'}>
                    524
                  </Text>
                </Box>{' '}
                <Box
                  padding={'24px'}
                  h={'111px'}
                  width={'100%'}
                  maxWidth={'324px'}
                  mb={'23px'}
                  bg={Colors.white}
                  borderRadius={'8px'}
                  border={'1px solid #E5E8F0'}
                >
                  <Text fontSize={'16px'} color={Colors.primaryBlack}>
                    Total Pro Users
                  </Text>
                  <Text fontSize={'24px'} mb={'15px'}>
                    36
                  </Text>
                </Box>
              </Grid>
            </Flex>

            <Box>
              <Flex mb={'40px'}>
                <Stack spacing={3}>
                  <InputGroup
                    display="flex"
                    alignItems="center"
                    bg="#E5E8F0"
                    borderRadius="full"
                  >
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={RiSearch2Line} color="#91989E" />}
                      mt="1.5"
                    />
                    <Input
                      py="25px"
                      borderRadius="full"
                      placeholder="Search customers..."
                      _placeholder={{
                        color: '#91989E',
                        fontWeight: 'light',
                      }}
                      onChange={() => ''}
                    />
                  </InputGroup>
                </Stack>
                <Stack ml={'12px'} spacing={3}>
                  <Select
                    width={'98px'}
                    borderRadius={'100px'}
                    placeholder="Filter"
                    size="lg"
                  />
                </Stack>
              </Flex>
              <Heading mb={'24px'} fontSize={'16px'}>
                8 invites(s)
              </Heading>
              {transactionData.map((el) => (
                <Flex justifyContent={'space-between'}>
                  <Flex mb={'20px'}>
                    <Text
                      width={'50px'}
                      height={'50px'}
                      borderRadius={'100%'}
                      bg={Colors.gray100}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      {el.icon}
                    </Text>
                    <Text ml={'12px'}>
                      <Text fontSize={'16px'} as={'span'}>
                        {el.name}
                      </Text>
                      <Text fontSize={'13px'}>{el.mail}</Text>
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Box>
          </Box>
        ) : null}
      </>

      <DrawerModal
        headingText={'Invite Friends'}
        size={'md'}
        isOpen={isOpen}
        onClose={onClose}
        contentFooter={
          <ChakraBtn
            onClick={onOpen}
            h={'40px'}
            borderRadius={'100px'}
            color={'white'}
            bg={Colors.primaryBlack}
            width={'100%'}
          >
            Proceed
          </ChakraBtn>
        }
      >
        <InviteFriends />
      </DrawerModal>
    </Box>
  );
};

export default ReferAndEarnContent;
