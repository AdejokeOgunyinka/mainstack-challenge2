import { chakra, ImageProps, forwardRef } from '@chakra-ui/react';
import {
  dashboard,
  tribe,
  wallet,
  editor,
  card,
  shop,
  masterclass,
  launchpad,
  globe,
  integrations,
  referEarn,
  bugReport,
  lightbulb,
  settings,
} from '../../svgs';

export interface INavIcon extends ImageProps {
  navName: string;
}

const NavIcon = forwardRef<INavIcon, 'img'>((props, ref) => {
  const navIconName =
    props.navName === 'Get Started'
      ? globe
      : props.navName === 'Dashboard'
      ? dashboard
      : props.navName === 'Editor'
      ? editor
      : props.navName === 'Tribe'
      ? tribe
      : props.navName === 'Balance'
      ? wallet
      : props.navName === 'Virtual Card'
      ? card
      : props.navName === 'Digital Shop'
      ? shop
      : props.navName === 'Masterclass'
      ? masterclass
      : props.navName === 'Launchpad'
      ? launchpad
      : props.navName === 'Settings'
      ? settings
      : props.navName === 'Integrations'
      ? integrations
      : props.navName === 'Refer and Earn'
      ? referEarn
      : props.navName === 'Report bug'
      ? bugReport
      : lightbulb;
  return <chakra.img src={navIconName} ref={ref} {...props} />;
});

export default NavIcon;
