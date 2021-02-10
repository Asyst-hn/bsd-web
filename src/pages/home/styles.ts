import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%'
	},
	canvas: {
		height: '100%',
		width: '100%',
		backgroundColor: 'rgb(238,238,238)'
	},
	nav: {
		width: '100%',
		height: '7.5%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'space-around',
		alignContent: 'center',
		position: 'sticky',
		top: 0,
		background: 'white',
		boxShadow: '1px 0 rgb(228, 228, 228)',
		borderBottom: '1px solid rgb(220,220,220)'
	},
	navItem: {
		alignSelf: 'center',
		paddingLeft: '32px',
		paddingRight: '32px'
	}
});
