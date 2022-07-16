import {
  Box,
  Heading,
  Stack,
  Text,
  Flex,
  Image,
  Checkbox,
} from '@chakra-ui/react';
import Button from '../../../../components/Button';
import Colors from '../../../../constants/Colors';
// import { useState } from 'react';
import { shareTribeNail } from 'views/digitalShop/constants';

const ShareWithTribe = () => {
  /*  let [value, setValue] = useState('');

  let handleInputChange: any = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  }; */

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
      <Box mb={{ base: '44px', md: '45px' }}>
        <Text textColor="#4D5760" textAlign="center">
          Select Tribes you would like to share with
        </Text>
      </Box>
      <Box>
        <Stack spacing={4}>
          {shareTribeNail.slice(0, 4).map((data: any) => (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p={4}
              py={{ md: '20px' }}
              key={data.id}
              border="1px solid #EBEDF0"
              borderRadius="12px"
              w="100%"
            >
              <Flex alignItems="center">
                <Image
                  mr={3}
                  borderRadius="6px"
                  boxSize="42px"
                  objectFit="cover"
                  src={data.image}
                  alt="book"
                  alignSelf="center"
                />
                <Box>
                  <Heading
                    textColor={Colors.primaryBlack}
                    fontSize="md"
                    width={{ base: '215px', md: '404px' }}
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {data.title}
                  </Heading>
                  <Text color={Colors.gray400} fontSize="12px">
                    {`${data.members} members`}
                  </Text>
                </Box>
              </Flex>
              <Checkbox defaultChecked size="md" colorScheme="orange" />
            </Flex>
          ))}
        </Stack>
      </Box>
      <Box position="absolute" bottom={{ base: '164px', md: '0px' }} w="100%">
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
      {/* 
      _focus={{ border: '1px solid #FF5403' }}
 */}
    </Box>
  );
};
export default ShareWithTribe;
