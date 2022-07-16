import { Box } from '@chakra-ui/react';
import { Colors } from '../../constants';
import { IButton } from './types';

const Button: React.FC<IButton> = ({
  text,
  px,
  py,
  bg,
  color,
  borderRadius,
  border,
  type,
  width,
  maxWidth,
  handleClick,
  fontSize,
}) => {
  return (
    <Box
      as="button"
      type={type || 'submit'}
      px={px}
      maxWidth={maxWidth}
      width={width}
      bg={bg || Colors.primaryBlack}
      color={color || 'white'}
      borderRadius={borderRadius || '3xl'}
      border={border || 'hidden'}
      py={'8px' || py}
      fontSize={'14px' || fontSize}
      onClick={handleClick}
    >
      {text}
    </Box>
  );
};

export default Button;
