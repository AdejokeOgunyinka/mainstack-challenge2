import React from 'react';
import { chakra, Flex, Heading, Text } from '@chakra-ui/react';
import Button from '../../../../components/Button';
import Colors from '../../../../constants/Colors';
import { faSvg } from 'assets/images';

const MainStackVirtualCard = () => {
  return (
    <Flex direction={'column'} alignItems={'center'} justifyItems={'center'}>
      <chakra.img src={faSvg} alt="2FA" marginY={'1rem'} />
      <Heading mb={'8px'} color={Colors.primaryBlack} fontSize={'18px'}>
        Create your virtual card
      </Heading>
      <Text
        textAlign={'center'}
        mb={'36px'}
        color={Colors.gray400}
        fontSize={'14px'}
      >
        Create your virtual card and have the chance to pay for your online
        shopping with your Mainstack Card.
      </Text>
      <Button
        width={'200px'}
        bg={Colors.primaryBlack}
        h={{ base: '40px', md: '48px' }}
        text={'Create Text'}
      />
    </Flex>
  );
};

export default MainStackVirtualCard;
