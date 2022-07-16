import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import Button from '../../../../components/Button';
import Colors from '../../../../constants/Colors';
import { customersNail } from '../../constants';

const ShareWithCustomers = () => {
  return (
    <Box
      w="100%"
      position="relative"
      minH="100vh"
      css={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Flex my="30px" alignItems="center" width="100%">
        <Flex
          bg={Colors.gray100}
          width={'full'}
          px={4}
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
      </Flex>
      <Box>
        <Flex
          mb="30px"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Heading fontSize="lg">120 customer(s)</Heading>
          <Text cursor="pointer" fontSize="sm" color={Colors.orange}>
            Select all
          </Text>
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
          {customersNail.slice(0, 10).map((data: any) => (
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
              <Checkbox
                size="md"
                colorScheme={Colors.orange}
                borderRadius="50%"
              />
            </Flex>
          ))}
        </Stack>
      </Box>
      <Box position="absolute" bottom={{ base: '20px', md: '-48px' }} w="100%">
        <Button
          text={'Send invite'}
          px={'1.5rem'}
          py={{ base: '12px', md: '16px' }}
          bg={Colors.primaryBlack}
          color={'white'}
          width={'full'}
          borderRadius="100px"
          handleClick={() => console.log('Button clicked')}
        />
      </Box>
    </Box>
  );
};
export default ShareWithCustomers;
