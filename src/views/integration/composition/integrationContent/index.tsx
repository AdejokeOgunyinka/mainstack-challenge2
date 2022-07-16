import React from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Colors from '../../../../constants/Colors';
import { ReactComponent as Lock } from '../../../../assets/svgs/lock.svg';
import Button from '../../../../components/Button';
import { ReactComponent as Calendly } from '../../../../assets/svgs/calendly.svg';
import { ReactComponent as Mailchimp } from '../../../../assets/svgs/mailchip.svg';
import { ReactComponent as Convertkit } from '../../../../assets/svgs/converkit.svg';
import { ReactComponent as FacebookPixel } from '../../../../assets/svgs/facebook.svg';
import { ReactComponent as GoogleAnalytics } from '../../../../assets/svgs/google.svg';

const IntegrationsData = [
  {
    id: 1,
    title: 'Calendly',
    icon: <Calendly />,
    description:
      'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididunt ut labore.',
  },
  {
    id: 2,
    title: 'Mailchimp',
    icon: <Mailchimp />,
    description:
      'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididunt ut labore.',
  },
  {
    id: 3,
    title: 'Convertkit',
    icon: <Convertkit />,
    description:
      'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididunt ut labore.',
  },
  {
    id: 4,
    title: 'Facebook Pixel',
    icon: <FacebookPixel />,
    description:
      'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididunt ut labore.',
  },
  {
    id: 5,
    title: 'Google Analytics',
    icon: <GoogleAnalytics />,
    description:
      'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididunt ut labore.',
  },
];

const IntegrationContent = () => {
  return (
    <Box>
      <Heading mb={'46px'} color={Colors.primaryBlack} fontSize={'18px'}>
        {' '}
        Integrations
      </Heading>
      <Grid
        justifyContent={'center'}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr )',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={5}
      >
        {IntegrationsData.map((el) => (
          <Box
            mr={{ base: 0, md: '16px' }}
            key={el.id}
            borderRadius={'8px'}
            border={'1px solid #E5E8F0'}
            padding={'20px'}
            minWidth={'236px'}
            w={'100%'}
          >
            <Box mb={'18px'}>{el.icon}</Box>
            <Text
              color={Colors.primaryBlack}
              fontSize={'14px'}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              mb={'12px'}
            >
              {el.title}
              <Lock />
            </Text>
            <Text color={Colors.gray400} fontSize={'12px'} mb={'13px'}>
              {el.description}
            </Text>
            <Button
              width={'196px'}
              bg={Colors.white}
              h={{ base: '40px', md: '48px' }}
              color={Colors.primaryBlack}
              text={'Connect'}
              border={' 1px solid #E5E8F0'}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default IntegrationContent;
