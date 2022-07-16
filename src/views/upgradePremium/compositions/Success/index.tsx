import React from 'react';
import { ReactComponent as Success } from '../../../../assets/svgs/success.svg';
import { Flex, Text } from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';
import Button from '../../../../components/Button';

const SuccessComponent = () => {
  return (
    <Flex direction={'column'} alignItems={'center'}>
      <Success />
      <Text color={Colors.black} fontSize={'18px'}>
        You’ve successfully subscribed to a PRO plan 🎉
      </Text>
      <Text color={Colors.gray400} fontSize={'14px'}>
        You’ll be notified soon when you can start using the PRO plan via email
      </Text>

      <Button
        w={'100%'}
        h={'40px'}
        color={Colors.black}
        borderRadius={'100px'}
        bg={Colors.gray100}
      >
        Go back to editor
      </Button>
    </Flex>
  );
};

export default SuccessComponent;
