import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Input,
  Stack,
} from '@chakra-ui/react';
import Button from '../../../../components/Button';
import { MarkdownEditor } from '../../../../components/MarkdownEditor';
import { ImageUpload } from '../../../../components/ImageUpload';
import { CurrentContentEnum } from '../DigitalShopRender';
import { useState } from 'react';
import Colors from '../../../../constants/Colors';

export interface ShopModalContentProps {
  onChangeContent?: (content: CurrentContentEnum) => void;
  productData: any; // TODO : add proper type
}

const AddProduct = ({
  onChangeContent,
  productData,
}: ShopModalContentProps) => {
  let [value, setValue] = useState('');

  let handleInputChange: any = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Box
      w="100%"
      position="relative"
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
          <Heading fontSize={'14px'} mb="12px" textColor={Colors.primaryBlack}>
            Product name
          </Heading>
          <Input
            value={value}
            _focus={{ border: '1px solid #FF5403' }}
            onChange={(e: any) => handleInputChange(e)}
            placeholder="E.g Marketing"
            size="lg"
            sx={{ '&::placeholder': { fontSize: '14px' } }}
            borderRadius="8px"
          />
        </Box>
        <Box>
          <Flex
            width="full"
            height="48px"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box flex={1} mr={{ base: 0, md: 2 }}>
              <Heading
                fontSize={'14px'}
                mb="12px"
                textColor={Colors.primaryBlack}
              >
                Actual Price
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
            <Box flex={1} ml={{ base: 0, md: 2 }}>
              <Heading
                fontSize={'14px'}
                mb="12px"
                textColor={Colors.primaryBlack}
              >
                Discounted Price (Optional)
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
                  800
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Heading
            fontSize={'14px'}
            mt="24px"
            mb="12px"
            textColor={Colors.primaryBlack}
          >
            Class description
          </Heading>
          <Box borderRadius="8px" border="1px solid #E5E8F0">
            <MarkdownEditor onChange={() => console.log('add element')} />
          </Box>
        </Box>
      </Stack>
      <Box position="absolute" bottom={{ base: '24px', md: '-48px' }} w="100%">
        <Button
          text={'Add Product'}
          px={'1.5rem'}
          py={{ base: '12px', md: '16px' }}
          bg={Colors.primaryBlack}
          color={'white'}
          width={'full'}
          borderRadius="100px"
          handleClick={() => console.log('Button clicked')}
        />
      </Box>
      <Spacer h={{ base: '84px', md: '0px' }} />
    </Box>
  );
};
export default AddProduct;
