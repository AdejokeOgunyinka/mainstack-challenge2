import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  useMediaQuery,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react';
import { customersNail } from '../constants';
import Colors from '../../../../../constants/Colors';
import IconButton from '../../../../../components/IconButton';
import CHECK from '../../../../../assets/svgs/digital/icons/check.svg';
import CLOSE from '../../../../../assets/svgs/digital/icons/close.svg';

const ViewMembers = () => {
  const [page, setPage] = useState('members');
  const [isLargerthan500px] = useMediaQuery('(min-width: 500px)');

  return (
    <Box
      px={2}
      css={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
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
        marginBottom={{ base: '22px', md: '26px' }}
      >
        <Box mr={'32px'}>
          <Heading
            as="h2"
            pb="12px"
            onClick={() => {
              setPage('members');
            }}
            color={page === 'members' ? Colors.orange : Colors.gray400}
            borderBottom={
              page === 'members' ? '2px solid #FF5403' : '2px solid white '
            }
            cursor="pointer"
            // display={{ base: 'none', md: 'block' }}
            fontSize="medium"
            fontWeight="normal"
            whiteSpace="nowrap"
          >
            Members{' '}
            <Text
              as="span"
              w="16px"
              h="16px"
              borderRadius="50%"
              bgColor={page === 'members' ? '#FFEEE7' : Colors.gray100}
              color={page === 'members' ? Colors.orange : Colors.gray400}
              px="6px"
              py="2px"
              alignItems="center"
              justifyContent="center"
              fontSize="12px"
              ml="4px"
            >
              {customersNail.length}
            </Text>
          </Heading>
        </Box>
        <Box>
          <Heading
            onClick={() => {
              setPage('pending');
            }}
            as="h2"
            pb="12px"
            color={page === 'pending' ? Colors.orange : Colors.gray400}
            borderBottom={
              page === 'pending' ? '2px solid #FF5403' : '2px solid white '
            }
            cursor="pointer"
            // display={{ base: 'none', md: 'block' }}
            fontSize="medium"
            fontWeight="normal"
            whiteSpace="nowrap"
          >
            Pending approval{' '}
            <Text
              as="span"
              w="16px"
              h="16px"
              borderRadius="50%"
              bgColor={page === 'pending' ? '#FFEEE7' : Colors.gray100}
              color={page === 'pending' ? Colors.orange : Colors.gray400}
              px="6px"
              py="2px"
              alignItems="center"
              justifyContent="center"
              fontSize="12px"
              ml="4px"
            >
              {customersNail.length}
            </Text>
          </Heading>
        </Box>
      </Flex>
      <Flex justifyContent="end" mb="24px">
        <Text
          onClick={() => {
            console.log('approved');
          }}
          color={Colors.orange}
          cursor="pointer"
          // display={{ base: 'none', md: 'block' }}
          fontSize="sm"
          fontWeight="normal"
          whiteSpace="nowrap"
        >
          Approve all
        </Text>
      </Flex>
      {page === 'members' ? (
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
              <Flex justifyContent="space-between" alignItems="center" py={2}>
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
                <Flex>
                  <IconButton
                    icon={<Image src={CLOSE} alt="close" />}
                    bg="white"
                    width={'40px'}
                    height={'40px'}
                    px={'10px'}
                    py={'10px'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    border="1px solid #E5E8F0"
                    mr="12px"
                    borderRadius="50%"
                  />
                  <IconButton
                    icon={<Image src={CHECK} alt="approve" />}
                    bg="#FF5403"
                    width={'40px'}
                    height={'40px'}
                    px={'10px'}
                    py={'10px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius="50%"
                  />
                </Flex>
              </Flex>
            ))}
          </Stack>
        </Box>
      ) : (
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
              <Flex justifyContent="space-between" alignItems="center" py={2}>
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
                <Flex>
                  <IconButton
                    icon={<Image src={CLOSE} alt="close" />}
                    bg="white"
                    width={isLargerthan500px ? '40px' : '28px'}
                    height={isLargerthan500px ? '40px' : '28px'}
                    px={isLargerthan500px ? '10px' : '7px'}
                    py={isLargerthan500px ? '10px' : '7px'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    border="1px solid #E5E8F0"
                    mr="12px"
                    borderRadius="50%"
                  />
                  <IconButton
                    icon={<Image src={CHECK} alt="approve" />}
                    bg="#FF5403"
                    width={isLargerthan500px ? '40px' : '28px'}
                    height={isLargerthan500px ? '40px' : '28px'}
                    px={isLargerthan500px ? '10px' : '7px'}
                    py={isLargerthan500px ? '10px' : '7px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius="50%"
                  />
                </Flex>
              </Flex>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
export default ViewMembers;
