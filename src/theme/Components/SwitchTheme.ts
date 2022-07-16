import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

export const SwitchTheme = {
	variants: {
		primary: (props: Dict<unknown>) => ({
			track: {
				padding: '1px',
				bg: mode('gray.200', 'gray.500')(props),
				borderWidth: '1px',
				_focus: {
					boxShadow: 'none'
				},
				_checked: {
					bg: 'brandOrange',
					borderColor: mode('brandOrange', 'brandOrange')(props)
				}
			},
			thumb: {
				height: '100%',
				bg: mode('white', 'white')(props),
				_checked: {
					bg: 'white'
				}
			},
			defaultProps: {
			
			}
		})
	},
	defaultProps: {
	
	},
};

