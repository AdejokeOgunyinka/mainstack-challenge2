
export const ButtonTheme = {
	// style object for base or default style
	baseStyle: {},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {
		primary: {
			bg:  'brandOrange',
			color: 'white',
			p:'3',
			px: '4',
			borderWidth: 1,
			borderRadius: 5,
			borderColor: 'brandOrange',
			fontWeight: 'light',
			fontSize: 'sm',
			_disabled: {
				bg: 'lightGrey',
			},

			_loading: {
				bg:  'brandOrange',
				_hover: {
					bg:  'brandOrange',
				},
			},

			_hover: {
				bg:  'white',
				color: 'brandOrange',
				borderColor: 'brandOrange',
				_disabled: {
					bg: 'lightGrey',
					color: 'white',
					borderColor: 'lightGrey',
				},
			},
       
		},
		secondary: {
			bg:  'primaryBlack',
			color: 'white',
			borderWidth: '1px',
			borderColor: 'primaryBlack',
			p:'3',
			px: '4',
			borderRadius: 5,
			fontSize: 'sm',
			_disabled: {
				bg: 'lightGrey',
			},

			_hover: {
				bg:  'white',
				color: 'primaryBlack',
				borderColor: 'primaryBlack',
				_disabled: {
					bg: 'lightGrey',
					color: 'white',
					borderColor: 'lightGrey',
				},
			},
       
		},
	},
	// default values for `size` and `variant`
	defaultProps: {
		size: '',
		variant: '',
	},
};