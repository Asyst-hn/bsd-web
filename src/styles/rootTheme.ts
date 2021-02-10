import { createMuiTheme } from '@material-ui/core';
import { esES } from '@material-ui/core/locale';

export const rootTheme = createMuiTheme(
	{
		typography: {
			fontFamily: "'Inter', sans-serif"
		},
		palette: {
			primary: { main: 'rgb(91,91,91)' },
			secondary: { main: 'rgb(112,128,144)' },
			text: {
				primary: 'rgb(105,105,105)',
				secondary: 'rgb(105,105,105)'
			}
		},
		props: {
			MuiInput: {
				disableUnderline: true
			},
			MuiButton: {
				disableRipple: true,
				disableElevation: true
			}
		},
		overrides: {
			MuiButton: {
				root: {
					textTransform: 'none'
				}
			}
		}
	},
	esES
);
