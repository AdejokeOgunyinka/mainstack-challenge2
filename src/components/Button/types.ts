import { BoxProps } from '@chakra-ui/react';

export interface IButton extends BoxProps {
  text?: any;
  px?: string;
  py?: string | any;
  color?: string;
  bg?: string;
  borderRadius?: string;
  border?: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?(): void;
  width?: string | object;
  maxWidth?: string | object;
  fontSize?: string;
}
