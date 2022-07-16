import { Box, Stack, Flex, Text, Spacer } from '@chakra-ui/react';
import Colors from 'constants/Colors';
import Button from 'components/Button';
import { customersNail } from 'views/digitalShop/constants';

const ViewAttendees = () => {
  return (
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
          </Flex>
        ))}
      </Stack>
      <Box position="absolute" zIndex="10" bottom={'20px'} w="100%">
        <Button
          text={'Export list as CSV'}
          px={'1.5rem'}
          py={{ base: '12px', md: '16px' }}
          width={'full'}
          borderRadius="100px"
        />
      </Box>
      <Spacer h={{ base: '84px', md: '0' }} />
    </Box>
  );
};
export default ViewAttendees;
