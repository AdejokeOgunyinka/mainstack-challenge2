import {
  Box,
  Flex,
  Text,
  Heading,
  GridItem,
  Center,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';
interface PageOverviewInterface {
  title: string;
  timing?: string;
  numbers?: number | string;
  percentage?: string;
  isEmpty?: boolean;
  height: number | string;
  width: any;
}

const PageOverview: React.FC<PageOverviewInterface> = ({
  isEmpty,
  title,
  timing,
  numbers,
  percentage,
  height,
  width,
}) => {
  return (
    <GridItem
      p="4"
      borderRadius="12px"
      border="1px solid #E5E8F0"
      maxW={width}
      w={width}
      minH={height}
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        w="100%"
        h="100%"
      >
        <Box>
          <Flex w={'100%'} justifyContent="space-between">
            <Heading as="h2" fontSize="lg">
              {title}
            </Heading>
            <Box as="span">
              {<FiAlertCircle style={{ color: '#C4C4C4' }} />}
            </Box>
          </Flex>
          {!isEmpty && (
            <Text fontSize="14px" color="gray400">
              {timing}
            </Text>
          )}
        </Box>
        {isEmpty ? (
          <Center fontSize="sm" textAlign="center" pb={10}>
            <Box as="p">No available data, may take up to 24hrs</Box>
          </Center>
        ) : (
          <Box>
            <Stat>
              <StatNumber
                fontSize="32px"
                fontWeight="bold"
                color="primaryBlack"
              >
                {numbers}
              </StatNumber>
              <StatHelpText fontSize="14px" color="gray400">
                {`Total ${title}`}
                <StatArrow type="increase" color="#059964" />
                {percentage}
              </StatHelpText>
            </Stat>
          </Box>
        )}
      </Flex>
    </GridItem>
  );
};
export default PageOverview;
