import { useQuery } from 'react-query';
import { api } from '../utils/api';
import { useAuth } from '../context/auth';

export const useTickets = () => {
	const { userId } = useAuth();
	return useQuery('tickets', () =>
		api({
			path: `Sdk_Tickets/GetAllTickets/${userId}&2021-02-01&2021-02-15`,
			method: 'GET'
		})
	);
};
