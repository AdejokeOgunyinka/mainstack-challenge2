import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Colors from '../../../constants/Colors';
import { ReactComponent as Dash } from '../../../assets/svgs/dash.svg';
import { accordionData } from './dummyData';

const AccordionComponent = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'144px'}
    >
      <Heading mb={'50px'}>FAQ</Heading>
      {accordionData.map((el) => (
        <Box
          boxShadow={' 0px 6px 12px rgba(181, 195, 200, 0.16)'}
          border={'1px solid #F2F2F2'}
          padding={'24px'}
          width={'680px'}
          mb={'8px'}
        >
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={'24px'} color={Colors.primaryBlack}>
              {el.title}
            </Text>
            <Dash />
          </Flex>
          <Box mt={'24px'}>
            <Text fontSize={'16px'} color={Colors.gray400}>
              {el.content}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AccordionComponent;
