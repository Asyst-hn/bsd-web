import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/auth';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useNotifications } from './context/notifications';

const App: React.FC = () => {
	const { isAuthenticated } = useAuth();
	const { message, toggle, handleClose, severity } = useNotifications();

	return (
		<Switch>
			<Route exact path='/login'>
				<Login />
			</Route>
			<Route exact path='/'>
				<Redirect to='/app' />
			</Route>
			<Route path='/app'>
				{isAuthenticated ? <Home /> : <Redirect to='/login' />}
			</Route>
			<Snackbar
				open={toggle}
				autoHideDuration={5000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				ClickAwayListenerProps={{ mouseEvent: false }}
			>
				<Alert severity={severity}>{message}</Alert>
			</Snackbar>
		</Switch>
	);
};

export default App;
