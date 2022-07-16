import { extendTheme, theme as baseTheme } from '@chakra-ui/react';
import { ButtonTheme as Button, SwitchTheme as Switch } from './Components';

export const theme = extendTheme({
  colors: {
    brandOrange: '#FF5403',
    primaryBlack: '#131316',
    secondaryGreen: '#059964',
    secondaryYellow: '#E9AD14',
    secondaryRed: '#E11900',
    textPrimary: {
      100: '#4D5155',
    },
    brandGray: {
      100: '#E5E8F0',
      200: '#D6D9E0',
      300: '#91989E',
      400: '#4D5760',
    },
    grayArrow: '#1C1B1F',
    chartPurple: '#844FF6',
    blackGray: '#1F2A35',
  },
  fonts: {
    heading: `Söhne Breit, ${baseTheme.fonts?.heading}`,
    body: `Söhne Breit, ${baseTheme.fonts?.body}`,
  },
  components: {
    Button,
    Switch,
  },
});
