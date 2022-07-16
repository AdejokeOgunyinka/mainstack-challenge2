import React from 'react';
import { Icon } from '@chakra-ui/react';
import { IIcon } from './types';

export const PdfIcon = ({
  color = '#131316',
  height = '15px',
  width = '16px',
  size = '16px',
  ...props
}: IIcon) => {
  return (
    <Icon
      width={width || size}
      height={height || size}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.20768 8.72917H5.85352V7.0625H6.87435C7.0549 7.0625 7.20768 7.00333 7.33268 6.885C7.45768 6.76722 7.52018 6.61806 7.52018 6.4375V5.39583C7.52018 5.21528 7.45768 5.06583 7.33268 4.9475C7.20768 4.82972 7.0549 4.77083 6.87435 4.77083H5.20768V8.72917ZM5.85352 6.4375V5.39583H6.87435V6.4375H5.85352ZM8.37435 8.72917H9.97852C10.173 8.72917 10.3293 8.67 10.4477 8.55167C10.5655 8.43389 10.6243 8.28472 10.6243 8.10417V5.39583C10.6243 5.21528 10.5655 5.06583 10.4477 4.9475C10.3293 4.82972 10.173 4.77083 9.97852 4.77083H8.37435V8.72917ZM9.02018 8.10417V5.39583H9.97852V8.10417H9.02018ZM11.6452 8.72917H12.291V7.0625H13.4577V6.4375H12.291V5.39583H13.4577V4.77083H11.6452V8.72917ZM4.77018 12.1667C4.38129 12.1667 4.05852 12.0383 3.80185 11.7817C3.54463 11.5244 3.41602 11.2014 3.41602 10.8125V1.85417C3.41602 1.46528 3.54463 1.14222 3.80185 0.885C4.05852 0.628333 4.38129 0.5 4.77018 0.5H13.7285C14.1174 0.5 14.4405 0.628333 14.6977 0.885C14.9543 1.14222 15.0827 1.46528 15.0827 1.85417V10.8125C15.0827 11.2014 14.9543 11.5244 14.6977 11.7817C14.4405 12.0383 14.1174 12.1667 13.7285 12.1667H4.77018ZM4.77018 11.3333H13.7285C13.8813 11.3333 14.0063 11.2847 14.1035 11.1875C14.2007 11.0903 14.2493 10.9653 14.2493 10.8125V1.85417C14.2493 1.70139 14.2007 1.57639 14.1035 1.47917C14.0063 1.38194 13.8813 1.33333 13.7285 1.33333H4.77018C4.6174 1.33333 4.4924 1.38194 4.39518 1.47917C4.29796 1.57639 4.24935 1.70139 4.24935 1.85417V10.8125C4.24935 10.9653 4.29796 11.0903 4.39518 11.1875C4.4924 11.2847 4.6174 11.3333 4.77018 11.3333ZM2.27018 14.6667C1.88129 14.6667 1.55824 14.5383 1.30102 14.2817C1.04435 14.0244 0.916016 13.7014 0.916016 13.3125V3.52083H1.74935V13.3125C1.74935 13.4653 1.79796 13.5903 1.89518 13.6875C1.9924 13.7847 2.1174 13.8333 2.27018 13.8333H12.0618V14.6667H2.27018Z"
        fill={color}
      />
    </Icon>
  );
};
