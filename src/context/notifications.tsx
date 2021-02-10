import React, { createContext, useContext, useState } from 'react';

interface NotificationsContextType {
	message: string | null;
	toggle: boolean;
	severity: Severity | undefined;
	handleClose: () => void;
	setAlert: (message: string, severity?: Severity) => void;
}

type Severity = 'success' | 'error' | 'warning' | 'info' | undefined;
type GenericAlert = 'gerror';

const NotificationsContext = createContext<NotificationsContextType>(
	{} as NotificationsContextType
);

export const useNotifications = (): NotificationsContextType =>
	useContext(NotificationsContext);

export const NotificationsProvider: React.FC = ({ children }) => {
	const [message, setMessage] = useState<string | null>(null);
	const [toggle, setToggle] = useState<boolean>(false);
	const [severity, setSeverity] = useState<Severity>(undefined);

	const setAlert = (message: string | GenericAlert, severity: Severity) => {
		setToggle(true);

		if (message === 'gerror') {
			setMessage(
				'Oops! Ocurrio un error inesperado, por favor intenete de nuevo'
			);
			setSeverity('error');
		} else {
			setSeverity(severity);
			setMessage(message);
		}
	};

	const handleClose = () => {
		setToggle(false);
		setMessage(null);
		setSeverity(undefined);
	};

	return (
		<NotificationsContext.Provider
			value={{
				setAlert,
				handleClose,
				message,
				toggle,
				severity
			}}
		>
			{children}
		</NotificationsContext.Provider>
	);
};
