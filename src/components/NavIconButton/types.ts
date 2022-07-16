import { ResponsiveValue } from '@chakra-ui/react';
import { JSXElementConstructor, ReactElement } from 'react';
import { IconType } from 'react-icons';

export interface INavIconButton {
  active?: boolean;
  flexDir?: ResponsiveValue<any>;
  open?: () => void;
  icon: ReactElement<any, string | JSXElementConstructor<IconType>>;
  iconLabel: string;
}
