import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import DateFnsUtils from '@date-io/date-fns';
import { es } from 'date-fns/locale';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core';
import { rootTheme } from './styles/rootTheme';
import { AuthProvider } from './context/auth';
import { NotificationsProvider } from './context/notifications';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles/index.css';

const queryClient = new QueryClient();
const history = createBrowserHistory();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={rootTheme}>
			<MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
				<Router history={history}>
					<NotificationsProvider>
						<AuthProvider>
							<App />
						</AuthProvider>
					</NotificationsProvider>
				</Router>
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	</QueryClientProvider>,
	document.getElementById('root')
);
