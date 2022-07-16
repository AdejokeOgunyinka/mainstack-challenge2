import React, { useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import { ReactComponent as DragIndicator } from '../../assets/svgs/dragIndicator.svg';
import { ReactComponent as Delete } from '../../assets/svgs/delete.svg';
import { ReactComponent as ChevronUp } from '../../assets/svgs/chevronUp.svg';
import { ReactComponent as ChevronDown } from '../../assets/svgs/chevronDown.svg';

type MediaAppNameT = {
  name: string;
  selected: string[];
  setSelected?: () => void;
  handleRemove?: (data: string) => void;
};
const MediaAppName: React.FC<MediaAppNameT> = ({
  name,
  selected,
  handleRemove,
}) => {
  console.log(selected);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const remove = (value: string) => {
    if (handleRemove) handleRemove(value);
  };

  return (
    <Box
      borderRadius={'12px'}
      marginBottom={'12px'}
      padding={'20px'}
      border={'1px solid #E5E8F0'}
    >
      <Box
        marginBottom={'32px'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Text display={'flex'} alignItems={'center'}>
          <DragIndicator /> {name}{' '}
        </Text>
        <Text cursor={'pointer'} display={'flex'}>
          <Delete onClick={() => remove(name)} />{' '}
          {show ? (
            <ChevronUp onClick={handleClick} />
          ) : (
            <ChevronDown onClick={handleClick} />
          )}{' '}
        </Text>
      </Box>

      {show ? (
        <Box>
          <Text marginBottom={'14px'} fontSize={'14px'}>
            Your handle
          </Text>
          <Input />
        </Box>
      ) : null}
    </Box>
  );
};

export default MediaAppName;
