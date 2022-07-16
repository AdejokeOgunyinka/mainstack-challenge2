import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button as ChakraBtn,
  Flex,
  Switch,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';
import { ReactComponent as Tick } from '../../../../assets/svgs/tick.svg';
import ComparePlans from '../comparePlans';
import AccordionComponent from '../accordion';
import { premiumFeatures } from '../dummyData';
import ContactUs from '../contact';

const PremiumUpgrade = () => {
  return (
    <Box width={'100%'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        mb={'72px'}
      >
        <Heading mb={'38px'} fontSize={'48px'}>
          {' '}
          Upgrade your account
        </Heading>

        <FormControl
          display="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <FormLabel htmlFor="monthly-billing" mb="0">
            <Text color={Colors.gray400} fontSize={'14px'}>
              {' '}
              Monthly billing
            </Text>
          </FormLabel>
          <Switch size={'md'} id="monthly-billing" />
          <Text ml={'12px'} color={Colors.gray400} fontSize={'14px'}>
            Annual Billing
          </Text>
        </FormControl>
      </Box>
      <Flex direction={{ base: 'column', md: 'row' }}>
        {premiumFeatures.map((el) => (
          <Box
            marginBottom={{ base: '60px', md: 'none' }}
            width={'100%'}
            maxWidth={{ base: 'none', md: '328px' }}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            borderRadius={'16px'}
            border={'1px solid #E5E8F0;'}
            // height={{ base: '780px', md: '832px' }}
            mr={'45px'}
            padding={'21px'}
            bg={el.cardBg}
            color={el.cardColor}
          >
            <Box>
              <Box>
                <Text
                  fontWeight={'bold'}
                  color={Colors.primaryBlack}
                  fontSize={'16px'}
                >
                  {el.plan}
                </Text>
                <Text display={'flex'} alignItems={'center'} fontSize={'48px'}>
                  {el.price}
                  <Text
                    color={el.spannedTextColor}
                    fontSize={'16px'}
                    ml={'12px'}
                  >
                    Per month
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text display={'inline-block'} fontSize={'14px'}>
                  {' '}
                  <Text mr={'5px'}>
                    {' '}
                    {el.features.map((text) => (
                      <Text
                        mb={'24px'}
                        display={'flex'}
                        alignItems={'center'}
                        mr={'5px'}
                      >
                        <Tick />
                        <Text ml={'8px'}>{text}</Text>
                      </Text>
                    ))}
                  </Text>
                </Text>
              </Box>
            </Box>

            <Box>
              <ChakraBtn
                color={el.btnColor}
                bg={el.btnBgColor}
                height={'48px'}
                width={'252px'}
                borderRadius={'100px'}
                border={'1px solid #E5E8F0'}
              >
                <Text fontWeight={'light'} fontSize={'15px'}>
                  {el.btnText}
                </Text>
              </ChakraBtn>
            </Box>
          </Box>
        ))}
      </Flex>

      <ContactUs />
      <ComparePlans />
      <AccordionComponent />
    </Box>
  );
};

export default PremiumUpgrade;
