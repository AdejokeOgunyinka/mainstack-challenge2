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
        Successful
      </Text>
      <Text color={Colors.gray400} fontSize={'14px'}>
        Your withdrawal has been processed successfully.
      </Text>

      <Button
        w={'100%'}
        color={Colors.black}
        borderRadius={'100px'}
        bg={Colors.gray100}
      >
        Close
      </Button>
    </Flex>
  );
};

export default SuccessComponent;
