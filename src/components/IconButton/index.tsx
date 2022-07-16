import { Box } from '@chakra-ui/react';
import { Colors } from '../../constants';
import { IcButton } from './types';

const IconButton: React.FC<IcButton> = ({
  text,
  px,
  pr,
  pl,
  py,
  mr,
  bg,
  color,
  borderRadius,
  border,
  type,
  width,
  height,
  handleClick,
  icon,
  fontSize,
  justifyContent,
  alignItems,
  flexDirection,
  display,
}) => {
  return (
    <Box
      as="button"
      display={'flex' || display}
      type={type || 'submit'}
      px={px}
      py={py || '8px'}
      mr={mr}
      minWidth={width}
      minHeight={height}
      bg={bg || Colors.primaryBlack}
      color={color || 'white'}
      borderRadius={borderRadius || '3xl'}
      border={border || 'hidden'}
      fontSize={'14px' || fontSize}
      onClick={handleClick}
      justifyContent={justifyContent || ''}
      alignItems={alignItems || ''}
      flexDirection={flexDirection || 'row'}
    >
      <Box as="span" pl={pl || 0} pr={pr || 0} alignSelf="center">
        {icon}
      </Box>
      <Box as="span" alignSelf="center">
        {text || ''}
      </Box>
    </Box>
  );
};

export default IconButton;
