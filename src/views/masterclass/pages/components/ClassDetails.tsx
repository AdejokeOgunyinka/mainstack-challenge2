import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Button as ChakraBtn,
  Spacer,
} from '@chakra-ui/react';
import Colors from 'constants/Colors';
import { CurrentContentEnum } from '../MasterclassRender';
import TAG from 'assets/svgs/digital/icons/local_offer.svg';
import CALENDAR from 'assets/svgs/masterclass/icons/calendar_today.svg';
import MAP_MARKER from 'assets/svgs/masterclass/icons/sell.svg';
import MORE from 'assets/svgs/digital/icons/more_horiz.svg';
import MEMBERS from 'assets/svgs/digital/icons/group.svg';
import EDIT from 'assets/svgs/digital/icons/edit.svg';

export interface masterclassModalContentProps {
  onChangeContent?: (content: CurrentContentEnum) => void;
  classData: any; // TODO : add proper type
}

const ClassDetails = ({
  onChangeContent,
  classData,
}: masterclassModalContentProps) => {
  return (
    <>
      <Box
        w="100%"
        key={classData.id}
        css={{
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box
          borderRadius="12px"
          height="149px"
          overflow="hidden"
          position="relative"
          mb="16px"
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
                classData.status === 'Active'
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
              {classData.status === 'Active' ? 'Active' : 'Archived'}
            </Text>
          </Flex>
          <Image src={classData.image} alt="classs" width="100%" />
        </Box>
        <Box>
          <Heading
            as="h3"
            fontSize={'16px'}
            textColor={Colors.primaryBlack}
            width="200px"
            mb={3}
          >
            {classData.title.substring(0, 55)}
          </Heading>
          <Box mb={4}>
            <Text
              fontSize={'14px'}
              overflow="hidden"
              textOverflow="ellipsis"
              textColor={Colors.primaryBlack}
            >
              {classData.paragraph}
            </Text>
            <Text
              as="span"
              fontSize={'14px'}
              textColor={Colors.orange}
              fontWeight="bold"
            >
              Read More
            </Text>
          </Box>
          <Box mb={'20px'}>
            <Flex alignItems="center" mb="16px">
              <Image src={CALENDAR} alt="calendar" mr={'18px'} />
              <Text fontSize={'14px'} textColor={Colors.primaryBlack} mr="12px">
                {classData.timing}
              </Text>
            </Flex>
            <Flex alignItems="center" mb={'16px'}>
              <Image src={TAG} alt="price tag" mr={'18px'} />
              <Text fontSize={'14px'} textColor={Colors.primaryBlack} mr="12px">
                {classData.amount}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Image src={MAP_MARKER} alt="address" mr={'18px'} />
              <Text fontSize={'14px'} textColor={Colors.primaryBlack} mr="12px">
                {classData.address}
              </Text>
            </Flex>
          </Box>
          <Flex mb="24px">
            <ChakraBtn
              borderRadius="100px"
              fontWeight="bold"
              border="1px solid #E5E8F0"
              py={'12px'}
              width="42%"
              height="40px"
              fontSize="14px"
              textAlign="center"
              bg="white"
              mr={3}
            >
              <Text color={'#131316'} fontSize="14px" mr="12px">
                Edit details
              </Text>
              <Image textAlign="right" src={EDIT} alt="additional links" />
            </ChakraBtn>
            <ChakraBtn
              borderRadius="100px"
              color="primaryBlack"
              fontWeight="bold"
              border="1px solid #E5E8F0"
              py={'10px'}
              width="42%"
              height="40px"
              fontSize="14px"
              textAlign="center"
              bg="white"
              mr={3}
            >
              <Text color={'#131316'} fontSize="14px" mr="12px">
                View customers
              </Text>
              <Image textAlign="right" src={MEMBERS} alt="customers" />
            </ChakraBtn>
            <ChakraBtn
              borderRadius="50%"
              color="primaryBlack"
              fontWeight="bold"
              border="1px solid #E5E8F0"
              py={'10px'}
              width="40px"
              height="40px"
              fontSize="14px"
              textAlign="center"
              bg="white"
            >
              <Image src={MORE} alt="more items" />
            </ChakraBtn>
          </Flex>
          <Box
            borderRadius="12px"
            color="#4D5760"
            border="1px solid #E5E8F0"
            fontSize="14px"
            bg="white"
            pt="19px"
            pl="20px"
            height="114px"
            width="full"
            mb={4}
          >
            <Text pb={'15px'} color="primaryBlack" fontSize="14px">
              Total Sales
            </Text>
            <Text color="primaryBlack" fontWeight="bold" fontSize="32px">
              {classData.amount}
            </Text>
          </Box>
          <Box
            borderRadius="12px"
            color="#4D5760"
            border="1px solid #E5E8F0"
            fontSize="14px"
            bg="white"
            pt="19px"
            pl="20px"
            height="114px"
            width="full"
          >
            <Text pb={'15px'} color="primaryBlack" fontSize="14px">
              Seats sold
            </Text>
            <Text color="primaryBlack" fontWeight="bold" fontSize="32px">
              {classData.seat}
            </Text>
          </Box>
          <Spacer h={{ base: '84px', md: '0px' }} />
        </Box>
      </Box>
    </>
  );
};

export default ClassDetails;
