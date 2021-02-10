import { makeStyles } from '@material-ui/core';

export const loginStyles = makeStyles({
	root: {
		height: '100vh',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		margin: '8px',
		width: '300px'
	},
	input: {
		margin: '8px',
		width: '300px'
	},
	inputError: {
		margin: '8px',
		width: '300px',
		color: 'red',
		textAlign: 'center'
	}
});
