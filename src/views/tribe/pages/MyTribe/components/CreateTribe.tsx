import {
  Box,
  Flex,
  Heading,
  Input,
  Select,
  Spacer,
  Stack,
  Button as ChakraBtn,
  Text,
  Textarea,
  Checkbox,
} from '@chakra-ui/react';
import Button from 'components/Button';
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import { CurrentContentEnum } from '../MyTribeRender';
import { ImageUpload } from 'components/ImageUpload';

export interface TribeModalContentProps {
  onChangeContent: (content: CurrentContentEnum) => void;
}

const CreateTribe = ({ onChangeContent }: TribeModalContentProps) => {
  let [value, setValue] = useState('');
  const [activeButton, setActiveButton] = useState('free');
  const activeButtonClass = {
    color: '#FF5403',
    backgroundColor: '#FFEEE7',
    border: '1px solid #FF5403',
  };
  const inactiveButtonClass = {
    textColor: '#FF5403',
    backgroundColor: 'white',
    border: '1px solid #E5E8F0',
  };

  let handleInputChange: any = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Box
        w="full"
        css={{
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Stack spacing={{ base: 4, md: 6 }}>
          <Box mt={{ base: '35px', md: '39px' }}>
            <ImageUpload onChange={(val) => console.log(val)} value={''} />
          </Box>
          <Box>
            <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
              Title
            </Heading>
            <Input
              value={value}
              onChange={(e) => handleInputChange(e)}
              placeholder="E.g Marketing"
              size="lg"
              sx={{ '&::placeholder': { fontSize: '14px' } }}
              borderRadius="8px"
            />
          </Box>
          <Box>
            <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
              Description
            </Heading>
            <Textarea
              value={value}
              height="120px"
              pt="14px"
              pl="16px"
              onChange={(e) => handleInputChange(e)}
              placeholder="E.g A group interested in marketing"
              size="xl"
              sx={{ '&::placeholder': { fontSize: '14px' } }}
              borderRadius="8px"
            />
          </Box>
          <Box>
            <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
              Category
            </Heading>
            <Select
              placeholder="Select category"
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
          <Box>
            <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
              Membership type
            </Heading>
            <Flex width="full" height="48px">
              <ChakraBtn
                borderRadius="8px"
                fontWeight="bold"
                py={'12px'}
                width="48%"
                height="48px"
                fontSize="14px"
                textAlign="center"
                mr={2}
                css={
                  activeButton === 'free'
                    ? activeButtonClass
                    : inactiveButtonClass
                }
                onClick={() => setActiveButton('free')}
              >
                Free
              </ChakraBtn>
              <ChakraBtn
                borderRadius="8px"
                fontWeight="bold"
                py={'12px'}
                width="48%"
                height="48px"
                fontSize="14px"
                textAlign="center"
                ml={2}
                css={
                  activeButton === 'paid'
                    ? activeButtonClass
                    : inactiveButtonClass
                }
                onClick={() => setActiveButton('paid')}
              >
                Paid
              </ChakraBtn>
            </Flex>
          </Box>
          <Box>
            <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
              Fee
            </Heading>
            <Flex
              borderRadius="8px"
              color="#4D5760"
              border="1px solid #E5E8F0"
              height="48px"
              fontSize="14px"
              bg="white"
              mr={2}
              pt="14px"
              pl="16px"
              width="full"
            >
              $
              <Text pl={2} color="primaryBlack">
                1000
              </Text>
            </Flex>
          </Box>
          <Flex alignItems="center">
            <Checkbox border="1px solid #E5E8F0" bg="white" mr={2} />

            <Text pl={4} fontSize="14px" color="primaryBlack">
              Allow members to join without an approval
            </Text>
          </Flex>
          <Box>
            <Button
              handleClick={() =>
                onChangeContent(CurrentContentEnum.SuccessfulPage)
              }
              text={'Create Tribe'}
              px={'1.5rem'}
              py={{ base: '12px', md: '16px' }}
              bg={'primaryBlack'}
              color={'white'}
              width="full"
              borderRadius="100px"
            />
          </Box>
          <Spacer h={{ base: '84px', md: '0' }} />
        </Stack>
      </Box>
    </>
  );
};
export default CreateTribe;
