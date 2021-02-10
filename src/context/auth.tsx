import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../utils/api';
import { getToken, storeToken } from '../utils/localStore';
import { BrowserHistory } from 'history';

interface AuthContextType {
	token: string | undefined;
	isAuthenticated: boolean;
	addToken: (token: string) => void;
	removeToken: () => void;
	onMount: (history: BrowserHistory) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = (): AuthContextType => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
	const [token, setToken] = useState<string | undefined>(undefined);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const addToken = (token: string) => {
		setToken(token);
		storeToken(token);
	};

	const removeToken = () => {
		localStorage.removeItem('token');
		setToken(undefined);
	};

	const checkUser = async () => {
		if (token) {
			try {
				await api(
					{ path: '/users/auth', method: 'GET', token: token },
					{ noCache: true }
				);
				setIsAuthenticated(true);
			} catch (error) {
				removeToken();
				setIsAuthenticated(false);
			}
		} else {
			setIsAuthenticated(false);
		}
	};

	useEffect(() => {
		checkUser();
	}, [token]);

	const onMount = (history: BrowserHistory) => {
		const token = getToken();
		if (token) {
			addToken(token);
			history.push('/app');
		}
	};

	return (
		<AuthContext.Provider
			value={{ token, addToken, removeToken, isAuthenticated, onMount }}
		>
			{children}
		</AuthContext.Provider>
	);
};
