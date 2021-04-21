import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '80%',
		marginLeft: '64px',
		marginRight: '64px'
	},
	actionBar: {
		display: 'flex',
		flexDirection: 'row',
		margin: '24px',
		justifyContent: 'space-around'
	},
	grid: {
		background: 'white'
	},
	input: {
		margin: '0px'
	}
});
