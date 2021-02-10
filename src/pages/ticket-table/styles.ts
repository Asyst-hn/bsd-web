import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '80%',
		margin: '64px'
	},
	actionBar: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: '24px',
		justifyContent: 'space-around'
	},
	grid: {
		background: 'white'
	}
});
