export interface IcButton {
  text?: any;
  px?: string | number;
  py?: string | number;
  pr?: string | number;
  pl?: string | number;
  mr?: string | number;
  color?: string;
  bg?: string;
  borderRadius?: string;
  border?: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?(): void;
  width?: string | object;
  icon?: any;
  fontSize?: string | number;
  height?: string | number;
  justifyContent?: string | null;
  alignItems?: string | null;
  flexDirection?: any;
  display?: string;
}
