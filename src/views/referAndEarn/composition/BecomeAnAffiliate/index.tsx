import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';
import { ReactComponent as Share } from '../../../../assets/svgs/share.svg';
import { ReactComponent as Speaker } from '../../../../assets/svgs/speaker.svg';
import { ReactComponent as Cash } from '../../../../assets/svgs/cash.svg';

const affiliateData = [
  {
    id: 1,
    title: 'Register as an affiliate',
    icon: <Share />,
    description:
      'Be among the first to earn revenue for referring new Mainstack pro users. It’s free to join, no fees or minumun sales required',
  },
  {
    id: 2,
    title: 'Promote Mainstack',
    icon: <Speaker />,
    description:
      'Be among the first to earn revenue for referring new Mainstack pro users. It’s free to join, no fees or minumun sales required',
  },
  {
    id: 3,
    title: 'Start Earning',
    icon: <Cash />,
    description:
      'Be among the first to earn revenue for referring new Mainstack pro users. It’s free to join, no fees or minumun sales required',
  },
];

const BecomeAffiliate = () => {
  return (
    <Box>
      <Box mb={'24px'}>
        <Heading mb={'12px'} color={Colors.primaryBlack} fontSize={'20px'}>
          How it works
        </Heading>
        <Text fontSize={'14px'}>
          Be among the first to earn revenue for referring new Mainstack pro
          users. It’s free to join, no fees or minumun sales required. Be among
          the first to earn revenue .
        </Text>
      </Box>

      <Box>
        {affiliateData.map((el) => (
          <Box
            mr={{ base: 0, md: '16px' }}
            key={el.id}
            borderRadius={'8px'}
            border={'1px solid #E5E8F0'}
            padding={'24px'}
            minWidth={'236px'}
            w={'100%'}
            mb={'14px'}
          >
            <Box mb={'32px'}>{el.icon}</Box>
            <Text color={Colors.primaryBlack} fontSize={'18px'} mb={'16px'}>
              {el.title}
            </Text>
            <Text color={Colors.gray400} fontSize={'14px'} mb={'13px'}>
              {el.description}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BecomeAffiliate;
