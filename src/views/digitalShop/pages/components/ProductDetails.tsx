import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button as ChakraBtn,
  Spacer,
} from '@chakra-ui/react';
import Colors from 'constants/Colors';
import { CurrentContentEnum } from '../DigitalShopRender';
import TAG from 'assets/svgs/digital/icons/local_offer.svg';
import ATTACHMENT from 'assets/svgs/digital/icons/attachment.svg';
import MORE from 'assets/svgs/digital/icons/more_horiz.svg';
import MEMBERS from 'assets/svgs/digital/icons/group.svg';
import EDIT from 'assets/svgs/digital/icons/edit.svg';

export interface ShopModalContentProps {
  onChangeContent?: (content: CurrentContentEnum) => void;
  productData: any; // TODO : add proper type
}

const ProductDetails = ({
  onChangeContent,
  productData,
}: ShopModalContentProps) => {
  return (
    <>
      <Box
        w="100%"
        key={productData.id}
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
                productData.status === 'Active'
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
              {productData.status === 'Active' ? 'Active' : 'Archived'}
            </Text>
          </Flex>
          <Image src={productData.image} alt="products" width="100%" />
        </Box>
        <Box>
          <Text
            as="span"
            display="inline-block"
            py={'4px'}
            px={'8px'}
            borderRadius="6px"
            fontSize={'12px'}
            bgColor={Colors.gray100}
            mt={6}
            mb={4}
            textColor={Colors.primaryBlack}
          >
            Preorder
          </Text>
          <Heading
            as="h3"
            fontSize={'16px'}
            textColor={Colors.primaryBlack}
            width="200px"
          >
            {productData.title.substring(0, 55)}
          </Heading>
          <Box my={4}>
            <Text
              fontSize={'14px'}
              overflow="hidden"
              textOverflow="ellipsis"
              textColor={Colors.primaryBlack}
            >
              {productData.paragraph}
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
            <Flex alignItems="center" mb={'16px'}>
              <Image src={TAG} alt="price tag" mr={'18px'} />
              <Text fontSize={'14px'} textColor={Colors.primaryBlack} mr="12px">
                {productData.amount}
              </Text>
              <Text
                fontSize={'14px'}
                textDecoration="line-through"
                textColor={Colors.gray300}
                mr="12px"
              >
                $800
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Image src={ATTACHMENT} alt="price tag" mr={'18px'} />
              <Text fontSize={'14px'} textColor={Colors.primaryBlack} mr="12px">
                {`${productData.bookTitle}.pdf`}
              </Text>
            </Flex>
          </Box>
          <Flex mb="24px">
            <ChakraBtn
              borderRadius="100px"
              color="primaryBlack"
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
            pb="20px"
            height="114px"
            width="full"
          >
            <Text pb={'15px'} color="primaryBlack" fontSize="14px">
              Total Sales
            </Text>
            <Text color="primaryBlack" fontWeight="bold" fontSize="32px">
              {productData.amount}
            </Text>
          </Box>
          <Spacer h={{ base: '84px', md: '0px' }} />
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
