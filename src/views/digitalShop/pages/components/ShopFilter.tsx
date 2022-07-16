import {
  Box,
  Flex,
  Menu,
  MenuList,
  Heading,
  Image,
  Stack,
  Select,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import Colors from 'constants/Colors';
import Button from 'components/Button';
import CHEVRON_DOWN from '../../../../assets/svgs/tribe/expand_more.svg';
import { FiChevronDown } from 'react-icons/fi';

const ShopFilter = () => {
  const { onOpen } = useDisclosure();
  const [isLargerThan374px] = useMediaQuery('(min-width: 374px)');
  return (
    <>
      <Menu>
        <Flex
          as="button"
          onClick={onOpen}
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
          {!isLargerThan374px ? null : <Box pr="4px">Filter</Box>}
          <Image
            cursor="pointer"
            src={CHEVRON_DOWN}
            alt="expand more"
            style={{
              color: `${Colors.gray300}`,
              height: '5px',
            }}
          />
        </Flex>
        <MenuList w="full" px="20px" py="24px">
          <Box mb={5}>
            <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
              Status
            </Heading>
            <Select
              placeholder="All"
              w="full"
              icon={
                <FiChevronDown
                  style={{ width: '9px', height: '5px', color: '#4D5760' }}
                />
              }
              size="lg"
              sx={{ '&::placeholder': { fontSize: '14px' } }}
              borderRadius="8px"
              fontSize={'14px'}
              mb="12px"
              textColor="primaryBlack"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
          </Box>
          <Box mb={6}>
            <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
              Date Added
            </Heading>
            <Select
              placeholder="Last 30 Days"
              icon={
                <FiChevronDown
                  style={{ width: '9px', height: '5px', color: '#4D5760' }}
                />
              }
              w="full"
              size="lg"
              sx={{ '&::placeholder': { fontSize: '14px' } }}
              borderRadius="8px"
              fontSize={'14px'}
              mb="12px"
              textColor="primaryBlack"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
          </Box>
          <Stack w="full" spacing={4} direction="row" align="center">
            <Button
              text="Clear"
              bg="brandGray.100"
              textColor="primaryBlack"
              py="12px"
              fontSize="15px"
              height="40px"
              width="50%"
              borderRadius="100px"
            />
            <Button
              text="Filter"
              bg="brandGray.400"
              textColor="white"
              py="12px"
              fontSize="15px"
              height="40px"
              width="50%"
              borderRadius="100px"
            />
          </Stack>
        </MenuList>
      </Menu>
    </>
  );
};

export default ShopFilter;
