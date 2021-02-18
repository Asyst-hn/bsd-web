import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
	userId: string | undefined;
	isAuthenticated: boolean;
	setUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = (): AuthContextType => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
	const [userId, setUserId] = useState<string | undefined>(undefined);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	return (
		<AuthContext.Provider
			value={{ userId, setUserId, isAuthenticated, setIsAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};
