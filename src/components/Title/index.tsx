import { Box, Heading, Flex } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface TitleInterface {
  title?: string;
  hasButton?: boolean;
  // FiArrowLeft?: React.ComponentProps<typeof FiArrowLeft>,
}

// const icon = FiArrowLeft

export const Title: React.FC<TitleInterface> = ({ title, hasButton }) => {
  return (
    <Heading as="h2" fontSize={{ base: '18px', sm: '20px' }} fontWeight="bold">
      {hasButton ? (
        <Link to="/dashboard">
          <Flex>
            <Box as="span" css={{ marginLeft: '-4px' }}>
              {
                <FiArrowLeft
                  style={{
                    color: '#C4C4C4',
                    marginLeft: '-8px',
                    marginRight: '8px',
                  }}
                />
              }
            </Box>
            <Box as="span">{title}</Box>
          </Flex>
        </Link>
      ) : (
        <Box as="span">{title}</Box>
      )}
    </Heading>
  );
};
