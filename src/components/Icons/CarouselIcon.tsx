import { Icon } from '@chakra-ui/react';
import { IIcon } from './types';

export const CarouselIcon = ({
  color = '#4D5760',
  height = '12px',
  width = '18px',
  size = '14px',
  ...props
}: IIcon) => {
  return (
    <Icon
      width={width || size}
      height={height || size}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.300049 2H3.00005V10H0.300049V2ZM5.00005 0H13V12H5.00005V0ZM15 2H17.7001V10H15V2ZM6.00005 1V11H12V1H6.00005Z"
        fill={color}
      />
    </Icon>
  );
};
