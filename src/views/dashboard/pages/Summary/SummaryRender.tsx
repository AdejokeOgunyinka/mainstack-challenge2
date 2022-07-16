import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Grid,
  Stack,
} from '@chakra-ui/react';
import { Title } from '../../../../components/Title';
import TimeBadge from '../../../../compositions/TimeBadge';
import { Link } from 'react-router-dom';
import PageOverview from '../../../../compositions/PageOverview';
import { DoughnutChart } from '../../../../components/DoughnutChart';
import { Countries } from '../../../../components/Countries';
import { Social } from '../../../../components/Social';
import { Colors } from '../../../../constants';

const SummaryRender = () => {
  return (
    <Flex
      w={{ base: 'calc(100vw - 2rem)', md: 'calc(100% - 2rem)' }}
      flexDir={'column'}
    >
      <Title title="Dashboard" />
      <Flex alignItems="center" justifyContent="space-between" mt={8} mb={3}>
        <Box>
          <Heading
            as="h4"
            display={{ base: 'none', md: 'block' }}
            fontSize="2xl"
            fontWeight="bold"
          >
            Good morning, Blessing ⛅️
          </Heading>
          <Heading
            as="h4"
            display={{ base: 'block', md: 'none' }}
            fontSize={{ base: 'lg', md: '2xl' }}
            fontWeight="bold"
          >
            Summary
          </Heading>
          <Text
            display={{ base: 'none', md: 'flex' }}
            fontSize={'14px'}
            lineHeight={'22px'}
            color={Colors.gray400}
            fontWeight={'light'}
          >
            Check out your dashboard summary.
          </Text>
        </Box>
        <Link to="/analytics">
          <Text textColor="Orange" fontSize="sm">
            View analytics
          </Text>
        </Link>
      </Flex>
      <TimeBadge />
      <Grid
        gap={4}
        mb={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
      >
        <PageOverview
          title="Page Views"
          timing="All Time"
          numbers="32"
          percentage="100%"
          width={'full'}
          height={40}
        />
        <PageOverview
          title="Link Clicks"
          timing="All Time"
          numbers="41"
          percentage="100%"
          width={'full'}
          height={40}
        />
        <PageOverview
          title="Clickthrough Rate"
          timing="All Time"
          numbers="60%"
          percentage="100%"
          width={'full'}
          height={40}
        />
        <PageOverview
          title="Mailing Lists"
          timing="All Time"
          numbers="1000"
          percentage="100%"
          width={'full'}
          height={40}
        />
        <PageOverview
          title="Phone Lists"
          timing="All Time"
          numbers="401"
          percentage="100%"
          width={'full'}
          height={40}
        />
        <PageOverview
          title="Downloadable Resources"
          timing="All Time"
          numbers="60"
          percentage="100%"
          width={'full'}
          height={40}
        />
      </Grid>
      <Box p="4" borderRadius="12px" border="1px solid #E5E8F0">
        <Flex
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
          marginTop={2}
          marginBottom={8}
        >
          <Box>
            <Heading as="h4" fontSize="md" fontWeight="bold">
              Top Clicked Links
            </Heading>
          </Box>
          <Spacer />
          <Link to="/analytics">
            <Text textColor="Orange" fontSize="sm">
              View full reports
            </Text>
          </Link>
        </Flex>
        <Stack
          overflowX={'auto'}
          flexWrap={'nowrap'}
          css={{
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: '-ms-autohiding-scrollbar',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="sm">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="sm"
              ml={4}
            >
              50
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="sm">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="sm"
              ml={4}
            >
              20
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="sm">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="sm"
              ml={4}
            >
              10
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="sm">
              https://ludicrous-preface-b36.notion.site/88878f31f0b44fc383874b7c221790de
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="sm"
              ml={4}
            >
              7
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Text textColor={Colors.primaryBlack} fontSize="sm">
              Other
            </Text>
            <Text
              textColor={Colors.primaryBlack}
              fontWeight="bold"
              fontSize="sm"
              ml={4}
            >
              3
            </Text>
          </Flex>
        </Stack>
      </Box>
      <Flex w={'full'} flexDirection={{ base: 'column', lg: 'row' }} my={4}>
        <Box
          p="4"
          flex={1}
          mr={{ base: 0, md: 2 }}
          mb={4}
          borderRadius="12px"
          border="1px solid #E5E8F0"
        >
          <Flex
            alignItems="center"
            flexDirection={{ base: 'column', md: 'row' }}
            marginTop={2}
            marginBottom={{ base: '8px', lg: '32px' }}
          >
            <Heading as="h4" fontSize="md" fontWeight="bold">
              Top Locations
            </Heading>
            <Spacer />
            <Link to="/analytics">
              <Text textColor="Orange" fontSize="sm">
                View full reports
              </Text>
            </Link>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: 'column-reverse', xl: 'row' }}
          >
            <Box pb={8} alignSelf={{ base: 'start', xl: 'center' }} mt={8}>
              <Countries />
            </Box>
            <Box m={{ base: '8', lg: '0' }}>
              <DoughnutChart
                width={160}
                height={160}
                innerRadius={40}
                outerRadius={80}
              />
            </Box>
          </Flex>
        </Box>
        <Box
          p="4"
          ml={{ base: 0, md: 2 }}
          mb={4}
          flex={1}
          borderRadius="12px"
          border="1px solid #E5E8F0"
        >
          <Flex
            alignItems="center"
            flexDirection={{ base: 'column', md: 'row' }}
            marginTop={2}
            marginBottom={{ base: '8px', lg: '32px' }}
          >
            <Box>
              <Heading as="h4" fontSize="16px" fontWeight="bold">
                Top Referral Source
              </Heading>
            </Box>
            <Spacer />
            <Link to="/analytics">
              <Text textColor="Orange" fontSize="sm">
                View full reports
              </Text>
            </Link>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: 'column-reverse', xl: 'row' }}
          >
            <Box alignSelf={{ base: 'start', xl: 'center' }} pb={8} mt={8}>
              <Social />
            </Box>
            <Box m={{ base: '8', lg: '0' }}>
              <DoughnutChart
                width={160}
                height={160}
                innerRadius={40}
                outerRadius={80}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Spacer height={'10'} />
    </Flex>
  );
};

export default SummaryRender;
