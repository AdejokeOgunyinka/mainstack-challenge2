import { BoxProps, FlexProps } from '@chakra-ui/react';
import React from 'react';

export interface DashboardLayoutProps {
  content: React.ReactNode;
  mobile?: boolean;
  editor?: boolean;
}
export interface LinkItemProps {
  active?: boolean;
  name: string;
  route: string;
}

export interface SidebarProps extends BoxProps {
  mobile?: boolean;
  onClose: () => void;
}

export interface NavItemProps extends FlexProps {
  active?: boolean;
  label: string;
  route: string;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}
