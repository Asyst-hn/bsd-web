import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
const { REACT_APP_BASE_URL = 'api/' } = process.env;

interface RequestConfig {
	path: string;
	method: Method;
	body?: unknown;
}

interface OptionTypes {
	noCache?: boolean;
}

export const api = async (
	req: RequestConfig,
	options?: OptionTypes
): Promise<AxiosResponse<any>> => {
	const axiosConfig: AxiosRequestConfig = {
		url: `${REACT_APP_BASE_URL + req.path}`,
		method: req.method
	};

	if (req.body) {
		axiosConfig.data = req.body;
	}

	const res = await axios(axiosConfig);
	return res;
};
