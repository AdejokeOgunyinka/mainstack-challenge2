import React from 'react';
import { Icon } from '@chakra-ui/react';
import { IIcon } from './types';

export const DeleteIcon = ({
  color = '#131316',
  height = '24px',
  width = '24px',
  size = '24px',
  ...props
}: IIcon) => {
  return (
    <Icon
      width={width || size}
      height={height || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_360_7251"
        style={{ maskType: 'alpha' }}
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_360_7251)">
        <path
          d="M8.62461 19H15.3746C15.5413 19 15.6869 18.9373 15.8116 18.812C15.9369 18.6873 15.9996 18.5417 15.9996 18.375V9H7.99961V18.375C7.99961 18.5417 8.06228 18.6873 8.18761 18.812C8.31228 18.9373 8.45794 19 8.62461 19ZM6.22461 6.625V5.625H8.69961L9.69961 4.625H14.2996L15.2996 5.625H17.7746V6.625H6.22461ZM8.62461 20C8.15794 20 7.77061 19.846 7.46261 19.538C7.15394 19.2293 6.99961 18.8417 6.99961 18.375V8H16.9996V18.375C16.9996 18.8417 16.8456 19.2293 16.5376 19.538C16.2289 19.846 15.8413 20 15.3746 20H8.62461ZM7.99961 19H15.9996C15.9996 19 15.9369 19 15.8116 19C15.6869 19 15.5413 19 15.3746 19H8.62461C8.45794 19 8.31228 19 8.18761 19C8.06228 19 7.99961 19 7.99961 19Z"
          fill={color}
        />
      </g>
    </Icon>
  );
};
