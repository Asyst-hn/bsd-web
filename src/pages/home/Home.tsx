import React from 'react';
import { TopBar } from './TopBar';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useStyles } from './styles';
import { TicketTable } from '../ticket-table/TicketTable';

export const Home: React.FC = () => {
	const classes = useStyles();

	return (
		<Grid container style={{ height: '100vh', width: '100%' }}>
			<Grid item className={classes.canvas}>
				<TopBar />
				<Switch>
					<Route exact path='/app/tablero'>
						<TicketTable />
					</Route>
				</Switch>
			</Grid>

			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</Grid>
	);
};
