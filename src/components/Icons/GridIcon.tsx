import { Icon } from '@chakra-ui/react';
import { IIcon } from './types';

export const GridIcon = ({
  color = '#4D5760',
  height = '16px',
  width = '16px',
  size = '16px',
  ...props
}: IIcon) => {
  return (
    <Icon
      width={width || size}
      height={height || size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path
          d="M0 7V0H7V7H0ZM0 16V9H7V16H0ZM9 7V0H16V7H9ZM9 16V9H16V16H9ZM1 6H6V1H1V6ZM10 6H15V1H10V6ZM10 15H15V10H10V15ZM1 15H6V10H1V15Z"
          fill={color}
        />
    </Icon>
  );
};
