import { Badge, Flex } from '@chakra-ui/react';
import { useState } from 'react';

const times = [
  {
    id: 1,
    timeGap: '1 Day',
    selected: false,
    path: '',
  },
  {
    id: 2,
    timeGap: '3 Days',
    selected: false,
    path: '',
  },
  {
    id: 3,
    timeGap: '7 Days',
    selected: false,
    path: '',
  },
  {
    id: 4,
    timeGap: '30 Days',
    selected: false,
    path: '',
  },
  {
    id: 5,
    timeGap: 'All Time',
    selected: true,
    path: '',
  },
  {
    id: 6,
    timeGap: 'Custom Date',
    selected: false,
    path: '',
  },
];

const TimeBadge = () => {
  const [selectedBadge, setSelectedBadge] = useState(false);
  const handleSelect = (id: number) => {
    setSelectedBadge(!selectedBadge);
  };
  return (
    <Flex
      flexWrap={'nowrap'}
      overflow="auto"
      css={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {times.map((time) => (
        <Badge
          key={time.id}
          px={4}
          py={2}
          mr={2}
          my={4}
          bgColor={time.selected ? '#FFEEE7' : '#FFFFFF'}
          border={time.selected ? '1px solid #FF5403' : '1px solid #E5E8F0'}
          borderRadius={100}
          cursor="pointer"
          textTransform="capitalize"
          fontWeight="normal"
          onClick={() => handleSelect(time.id)}
        >
          {time.timeGap}
        </Badge>
      ))}
    </Flex>
  );
};
export default TimeBadge;
