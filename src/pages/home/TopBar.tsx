import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Tooltip, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import logo from './logo.png';

export const TopBar: React.FC = () => {
	const classes = useStyles();
	const { url } = useRouteMatch();

	return (
		<nav className={classes.nav}>
			<img
				src={logo}
				alt='logo_bsd'
				style={{
					height: '75%',
					alignSelf: 'center',
					paddingLeft: '32px'
				}}
			></img>
			<Tooltip title='Sucursales' placement='bottom'>
				<Link to={`${url}/tablero`} className={classes.navItem}>
					<Typography color='primary'>Tablero</Typography>
				</Link>
			</Tooltip>
			<Tooltip title='Sucursales' placement='bottom'>
				<Link to={`${url}/crear-ticket`} className={classes.navItem}>
					<Typography color='primary'>Crear Ticket</Typography>
				</Link>
			</Tooltip>
			<Tooltip title='Sucursales' placement='bottom'>
				<Link to={`${url}/reportes`} className={classes.navItem}>
					<Typography color='primary'>Reportes</Typography>
				</Link>
			</Tooltip>
		</nav>
	);
};
